import { AudioSource, useAudioPlayer } from "expo-audio";
import { useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

interface GuitarStringsProps {
  audio: AudioSource;
  style?: ViewStyle;
}

export default function GuitarStrings({ audio, style }: GuitarStringsProps) {
  const player = useAudioPlayer(audio);
  const [pressed, setPressed] = useState(false);

  function onPress() {
    player.seekTo(0);
    player.play();
    console.log("a guitar string has been pressed!");
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.string, pressed && styles.stringPressed, style]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  string: {
    width: "100%",
    height: 15,
    backgroundColor: "#d9d9d9",
    borderBottomWidth: 1,
    borderColor: "#8a8a8a",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    borderRadius: 2,
  },

  stringPressed: {
    transform: [{ translateY: 1 }],
    backgroundColor: "#bbb",
  },
});
