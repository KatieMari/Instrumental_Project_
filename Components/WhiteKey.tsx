import { AudioSource, useAudioPlayer } from 'expo-audio';
import { useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

interface WhiteKeyProps {
    audio: AudioSource;
    style?: ViewStyle;
}

// const audioSource = require('../helpers/notes/piano/A4.mp3');

export default function WhiteKey({ audio, style }: WhiteKeyProps) {
    const player = useAudioPlayer(audio);
    const [pressed, setPressed] = useState(false);

    function onPress() {
        player.seekTo(0);
        player.play()
        console.log("a white key has been pressed!")
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}>
            <View style={[styles.whiteKey,
            pressed && styles.whiteKeyPressed,
                style
            ]}
            >
                
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  whiteKey: {
    width: 60,
    height: 240,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderBottomWidth: 4,
    marginHorizontal: 1,
    borderRadius: 6,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 5,
    elevation: 5,
  },
  whiteKeyPressed: {
    
    shadowOpacity: 0.08,
    backgroundColor: "#cacacaff",
  },
});