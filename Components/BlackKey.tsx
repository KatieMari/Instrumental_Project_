import { AudioSource, useAudioPlayer } from "expo-audio";
import { useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

//Defines the type of data (Props) that the BlackKey Component expects
interface BlackKeyProps {
    //Specific Audio Clip to be played when key is pressed
    audio: AudioSource;
    //Style passed in from parent component
    style?: ViewStyle;
}

//Main Component that represents a single Black Piano Key
export default function BlackKey({ audio, style }: BlackKeyProps) {
    //Create an Audio PLayer that can play the provided sound file
    const player = useAudioPlayer(audio);
    //Tracks whether the user is currently pressing down on the key, allows us to visually change the key
    const [pressed, setPressed] = useState(false);


    //Function that gets called when the key is fully pressed 
    function onPress() {
        //Rewinds the audio so it plays from the start every time
        player.seekTo(0);
        //PLays the audio file associated with the key
        player.play();
        console.log("Black key pressed!");
    }

    //Components visual structure
    return (
        //Pressable - a wrapper that detects touch interactions
        //View - represents the visible rectangular key
        //Inner View - adds a highlight for visual effect
        <Pressable
            //Plays sound when pressed
            onPress={onPress}
            //Changes state to pressed when key is pressed
            onPressIn={() => setPressed(true)}
            //Reverts state when key is released
            onPressOut={() => setPressed(false)} >

            <View style={[
                //Default style
                styles.blackKey,
                //Adds the Pressed effect when key is held down
                pressed && styles.blackKeyPressed,
                //Merges any styles passed in from the parent 
                style
            ]} >
                <View style={styles.highlight}></View>
            </View>
        </Pressable>
    );
}

//StyleSheet defines styles for the component above
const styles = StyleSheet.create({
    blackKey: {
        //Allows manual positioning 
        position: "absolute",
        width: 42,
        height: 140,
        backgroundColor: "#ddcee2ff",
        borderRadius: 7,
        //Added to flatten the top of the Keys for more seamless look
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        //Moves the Key to the left so it's centered over its matching WhiteKey
        marginLeft: -21,
        shadowColor: "#0f0f0fff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        //Android equivalent for shadow
        elevation: 6,
        //Ensures highlight doesn't spill outtise the round edges
        overflow: "hidden",
    },
    blackKeyPressed: {
        backgroundColor: "#c2aec9ff",
        shadowOpacity: 0.3,

    },
    highlight: {
        //Allows manual positioning 
        position: "absolute",
        //These 3 anchor the highlight at the top of the ket and stretch it edge to edge horizontally
        top: 0,
        left: 0,
        right: 0,
        height: "15%",
        backgroundColor: "rgba(236, 235, 236, 0.5)",
    },
});


//Makes sure BlackKeys appear visually ontop of the WhiteKeys
// zIndex: 2,