import WhiteKey from "@/Components/WhiteKey";
import { loadAudioPlayer } from "@/helpers/audio";
import { Platform, StyleSheet, useWindowDimensions, View } from "react-native";
import BlackKey from "./BlackKey";

// Natural Size of the Keyboard Before Scaling (7 WhiteKeys x 62px wide, 244px tall)
const KEYBOARD_WIDTH = 434;
const KEYBOARD_HEIGHT = 244;

export default function Piano() {
  // Load all Audio PLayers for Piano Notes
  const players = loadAudioPlayer() as Record<string, any>;
  // Current Screen/Window Size
  const { width, height } = useWindowDimensions();

  // Labels for each WhiteKey on the KeyBoard
  const whiteNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

  // BlackKeys Require Special Horizontal Placement - so each Entry Includes a Note and Left Offset
  const blackNotes = [
    { note: "Db4", left: 62 },
    { note: "Eb4", left: 125 },
    { note: "Gb4", left: 248 },
    { note: "Ab4", left: 310 },
    { note: "Bb4", left: 373 },
  ];

  // On Phones Keep the Original 3x Zoom. In a Web Browser, Shrink the Piano so it Always Fits the Window
  const scale =
    Platform.OS === "web"
      ? Math.min(3, (width * 0.9) / KEYBOARD_WIDTH, (height * 0.7) / KEYBOARD_HEIGHT)
      : 3;

  return (
    <View style={styles.screen}>
      {/* Main Container that Holds the Full Piano */}
      <View style={[styles.piano, { transform: [{ scale }] }]}>
        {/* Row of WhiteKeys Aligned Side-by-Side */}
        <View style={styles.whiteKeys}>
          {whiteNotes.map((note) => (<WhiteKey key={note} audio={players[note]} />))}
        </View>

        {/* BlackKeys Positioned Absolutely Above the White Keys */}
        <View style={styles.blackKeys}>
          {blackNotes.map(({ note, left }) => (
            <BlackKey key={note} audio={players[note]} style={{ left }} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // FullScreen Centered Background for the Piano
  screen: {
    flex: 1,
    backgroundColor: "#b9accaff",
    alignItems: "center",
    justifyContent: "center",
  },

  // Piano Container (the Zoom Level is Set Above, Based on Screen Size)
  piano: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  // Horizontal Row of WhiteKeys
  whiteKeys: {
    flexDirection: "row",
    // BlackKeys Sit Above these
    zIndex: 1,
  },

  // BlackKeys Stack Above the WhiteKeys
  blackKeys: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    // Ensures BlackKeys Appear Visually on top
    zIndex: 2,
  },
});
