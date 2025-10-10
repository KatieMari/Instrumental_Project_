import { AudioSource, useAudioPlayer } from "expo-audio";
import { useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

interface BlackKeyProps {
    audio: AudioSource;
    style?: ViewStyle;
}

export default function BlackKey({ audio, style }: BlackKeyProps) {
    const player = useAudioPlayer(audio);
    const [pressed, setPressed] = useState(false);

    function onPress() {
        player.seekTo(0);
        player.play();
        console.log("Black key pressed!");
    }

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
        >
            <View style={[styles.blackKey,
                    pressed && styles.blackKeyPressed,
                    style
                ]}
            >
                <View style={styles.highlight}></View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    blackKey: {
        position: "absolute",
        width: 42,
        height: 140,
        backgroundColor: "#4b4848ff",
        borderRadius: 7,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginLeft: -21,
        zIndex: 2,
        shadowColor: "#0f0f0fff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 6,
        overflow: "hidden",
    },
    blackKeyPressed: {
           // key moves slightly down
        backgroundColor: "#2b2b2b",        // darker shade for pressed look
        shadowOpacity: 0.3,
    },
    highlight: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "25%",
        backgroundColor: "rgba(255,255,255,0.1)",
    },
});
