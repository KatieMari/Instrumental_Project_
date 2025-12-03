import { AudioSource, useAudioPlayer } from 'expo-audio';
import { useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

// Props that the WhiteKey Component Accepts
interface WhiteKeyProps {
    // The Audio Note to Play when the Key is Pressed
    audio: AudioSource;
    style?: ViewStyle;
}

export default function WhiteKey({ audio, style }: WhiteKeyProps) {
    // Audio PLayer Instance for this Specific Note
    const player = useAudioPlayer(audio);
    // Tracks Whether the Key is being Presses to Update its Visual Style
    const [pressed, setPressed] = useState(false);

    // Called when the user Fully Taps the Key
    function onPress() {
        // Restart the Sound from the Beginning
        player.seekTo(0);
        // Play the Assigned Piano Note
        player.play()
        console.log("a white key has been pressed!")
    };

    return (
        <Pressable
            // Fires when Tap is Completed
            onPress={onPress}
            // Visual Feedback Start
            onPressIn={() => setPressed(true)}
            // Visual Feedback End
            onPressOut={() => setPressed(false)}>
            {/* The Visible White Piano Key */}
            <View style={[styles.whiteKey, pressed && styles.whiteKeyPressed, style]}></View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    // Defauly Styling for the White Piano Key
    whiteKey: {
        width: 60,
        height: 240,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        // Slight Bottom Ridge like a Real Piano Key
        borderBottomWidth: 4,
        marginHorizontal: 1,
        borderRadius: 6,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.28,
        shadowRadius: 5,
        // Android Shadow
        elevation: 5,
    },

    // Style Applied when the Key is Actively Pressed Down
    whiteKeyPressed: {
        shadowOpacity: 0.08,
        backgroundColor: "#cacacaff",
    },
});