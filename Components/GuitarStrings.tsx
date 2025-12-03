import { AudioSource, useAudioPlayer } from "expo-audio";
import React, { forwardRef, useImperativeHandle, useState, } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

// Props Expected by each GuitarString Component
interface GuitarStringsProps {
  // The Audio Source to Play when this String is Plucked
  audio: AudioSource;
  style?: ViewStyle;
}

// Defines the Methods Exposed to Parent Components Through refs
export interface GuitarStringHandle {
  // Allows Parent to Pluck String Programmatically
  pluck: () => void;
}

const GuitarStrings = forwardRef<GuitarStringHandle, GuitarStringsProps>(
  ({ audio, style }, ref) => {
    // Creates an Audio Player Instance for this Specific String
    const player = useAudioPlayer(audio);
    // Tracks Whether the String is Currently Pressed for Visual Feedback
    const [pressed, setPressed] = useState(false);

    // Plays the Sound and Briefly Shows a Pressed Animation
    function pluck() {
      // Restart Audio from the Beginning
      player.seekTo(0);
      // Play the Note
      player.play();
      // Trigger Pressed State for Visuals 
      setPressed(true);
      // Automatically Reset the Press Effect After a Short Delay 
      setTimeout(() => setPressed(false), 100);

      console.log("a guitar string has been plucked!");
    }

    // Expose the 'pluck' Function to Parent - Used for Drag-to-Pluck Gestures
    useImperativeHandle(ref, () => ({
      pluck,
    }));

    // Called when Tapped Normally
    function onPress() {
      pluck();
    }

    return (
      <Pressable
        onPress={onPress}
        // Visual Feedback when Touch Begins
        onPressIn={() => setPressed(true)}
        // Reset when Touch Ends
        onPressOut={() => setPressed(false)}
      >
        <View style={[styles.string, pressed && styles.stringPressed, style]} />
      </Pressable>
    );
  }
);

export default GuitarStrings;

// Visual Styling for the Guitar Strings
const styles = StyleSheet.create({
  string: {
    width: "100%",
    height: 20,
    backgroundColor: "#ddcee2ff",
    borderBottomWidth: 5,
    borderColor: "#bdbcbcff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    borderRadius: 15,
  },

  // Slightly Downward Moevement and Colour Change for "pressed" Effect
  stringPressed: {
    transform: [{ translateY: 1 }],
    backgroundColor: "#aa91b3ff",
  },
});
