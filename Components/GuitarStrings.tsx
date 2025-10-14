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
        width: 400,
        height: 8,
        backgroundColor: "#fff",
        borderColor: "#c0bfbfff",
        borderWidth: 1,
        borderBottomWidth: 2,
        borderRadius: 6,
        overflow: "hidden",
        shadowColor: "#636161ff",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.28,
        shadowRadius: 5,
        elevation: 3,
    },

    guitarStringPressed: {
        shadowOpacity: 0.08,
        backgroundColor: "#cacacaff",
    },
});