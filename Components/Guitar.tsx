import { loadAudioPlayerGuitar } from "@/helpers/audio";
import React, { useRef, useState } from "react";
import { GestureResponderEvent, Platform, StyleSheet, useWindowDimensions, View } from "react-native";
import GuitarStrings, { GuitarStringHandle } from "./GuitarStrings";

// Natural Size of the Guitar Neck Before Scaling
const NECK_WIDTH = 1600;
const NECK_HEIGHT = 640;

export default function Guitar() {
  // Load all Guitar Note Audio Player
  const players = loadAudioPlayerGuitar() as Record<string, any>;
  // Current Screen/Window Size
  const { width, height } = useWindowDimensions();

  // Chords for Each String
  const guitarNotes = ["Am", "C", "Dm", "F", "Em", "G"];

  // Refs to each String Component so 'pluck()' can be Called Imperatively
  const stringRefs = useRef<(GuitarStringHandle | null)[]>([]);
  // Ref to the Guitar Neck - on the Web we Measure it to Work Out which String the Mouse is Over
  const neckRef = useRef<View>(null);
  // Height of the Container that Holds all Strings, Used for Press Detection
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  // Keeps Track of which String Index was last Triggered while Dragging (strumming), so we dont Repeatedly Trigger the same one During Small Movements
  const lastIndexRef = useRef<number | null>(null);

  // In a Web Browser, Shrink the Guitar so it Always Fits the Window (Phones Keep the Original Size)
  const scale =
    Platform.OS === "web"
      ? Math.min(1, (width * 0.92) / NECK_WIDTH, (height * 0.75) / NECK_HEIGHT)
      : 1;

  // Works Out which String (0-5) the Finger or Mouse is Over
  function getStringIndex(e: GestureResponderEvent) {
    // Web: Compare the Mouse Position with the Neck's Position on the Page.
    // This Still Works when the Neck has been Scaled Down to Fit the Window.
    if (Platform.OS === "web") {
      const node = neckRef.current as unknown as HTMLElement | null;
      if (!node) return -1;
      const rect = node.getBoundingClientRect();
      const y = e.nativeEvent.pageY - window.scrollY - rect.top;
      return Math.floor(y / (rect.height / guitarNotes.length));
    }

    // Phones: Divide the Total Height into Equal Bands, one for each String
    if (!containerHeight) return -1;
    const { locationY } = e.nativeEvent;
    const stringHeight = containerHeight / guitarNotes.length;
    return Math.floor(locationY / stringHeight);
  }

  // Called Whenever the User Touches or Moves Across the Guitar Neck
  function handleMove(e: GestureResponderEvent) {
    const index = getStringIndex(e);

    // Only Trigger if - User Moved to a Different String - The Index is Within Valid Range
    if (
      index !== lastIndexRef.current &&
      index >= 0 &&
      index < guitarNotes.length
    ) {
      const stringHandle = stringRefs.current[index];
      // Plucks the String
      stringHandle?.pluck();
      lastIndexRef.current = index;
    }
  }

  // Reset Last String Index when the Touch is Released
  function handleRelease() {
    lastIndexRef.current = null;
  }

  return (
    <View style={styles.screen}>
      {/* Guitar Neck Area that Receives and Tracks Touch Gestures */}
      <View
        ref={neckRef}
        style={[styles.guitarNeck, { transform: [{ scale }] }]}
        // Tell React Native that this View wants to become the Touch Responder
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={handleMove}
        onResponderMove={handleMove}
        onResponderRelease={handleRelease}
      >
        {/* Frets Along the Guitar Neck */}
        {Array.from({ length: 8 }).map((_, i) => (
          <View key={i} style={[styles.fret, { left: i * 200 + 92 }]} />
        ))}

        {/* Fretboard Markers */}
        <View style={[styles.marker, { left: 770 }]} />
        <View style={[styles.marker, { left: 1170 }]} />

        {/* Container that Lays out all Strings Vertically */}
        <View
          style={styles.stringContainer}
          // Captures Height so we can Map Touch Y Position to a String Index
          onLayout={(e) => setContainerHeight(e.nativeEvent.layout.height)}
        >
          {guitarNotes.map((note, index) => (
            <GuitarStrings
              key={note}
              audio={players[note]}
              // Store ref so we can Call 'pluck()' Based on Touch Position
              ref={(el) => {
                stringRefs.current[index] = el;
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // FullScreen Centered Layout
  screen: {
    flex: 1,
    backgroundColor: "#b9accaff",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  // Visual Styling for the Guitar Neck Area
  guitarNeck: {
    position: "relative",
    width: NECK_WIDTH,
    height: NECK_HEIGHT,
    borderRadius: 15,
    backgroundColor: "#faf1f9ff",
    borderWidth: 3,
    borderColor: "#ddd",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 10, height: 10 },
  },

  // Vertical Container the Positions the Strings Evenly
  stringContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "space-between",
  },

  // Individual Fret Styling - Vertical Bars Across the Neck
  fret: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 8,
    backgroundColor: "#bd9ab5ff",
    opacity: 0.9,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
  },

  // Circular Fretboard Markers
  marker: {
    position: "absolute",
    top: "46%",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ce98beff",
    opacity: 0.7,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
});
