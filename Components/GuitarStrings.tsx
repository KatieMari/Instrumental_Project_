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
    height: 20,
    backgroundColor: "#d9d9d9",
    borderBottomWidth: 5,
    borderColor: "#bdbcbcff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    borderRadius: 15,
  },

  stringPressed: {
    transform: [{ translateY: 1 }],
    backgroundColor: "#bbb",
  },
});
