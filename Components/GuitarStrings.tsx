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
        player.play()
        console.log("a guitar string has been pressed!")
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}>
            <View style={[styles.guitarStrings, pressed && styles.guitarStringPressed, style]}></View>

        </Pressable>
    );
}

const styles = StyleSheet.create({
  guitarStrings: {
    width: 280,
    height: 4,
    backgroundColor: "#e8e8e8",
    borderColor: "#bbb",
    borderWidth: 0.6,
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1,
  },
  guitarStringPressed: {
    backgroundColor: "#cfcfcf",
    shadowOpacity: 0.05,
  },
});