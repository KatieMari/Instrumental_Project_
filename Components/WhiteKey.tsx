import { AudioSource, useAudioPlayer } from 'expo-audio';
import { Pressable, StyleSheet, View } from "react-native";

interface WhiteKeyProps {
    audio: AudioSource;
}

// const audioSource = require('../helpers/notes/piano/A4.mp3');

export default function WhiteKey({ audio }: WhiteKeyProps) {
    const player = useAudioPlayer(audio);
    function onPress() {
        player.seekTo(0);
        player.play()
        console.log("a white key has been pressed!")
    };

    return <Pressable onPress={onPress}>
        <View style={styles.whiteKey}></View>
    </Pressable>
}
const styles = StyleSheet.create({
    whiteKey: {
        borderColor: "black",
        width: 100,
        height: 300,
        borderWidth: 2,
        backgroundColor: "white",
    },
});