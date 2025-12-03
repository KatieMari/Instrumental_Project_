import { AudioSource, useAudioPlayer } from "expo-audio";
import { useState } from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

//Defines the Type of Props that the BlackKey Component Expects
interface BlackKeyProps {
    //The Audio Clip that Plays when the Key is Pressed
    audio: AudioSource;
    //Optional Custom Styling Provided by the Parent Component
    style?: ViewStyle;
}

//Main Component that Represents a Single Black Piano Key
export default function BlackKey({ audio, style }: BlackKeyProps) {
    //Create an Audio PLayer that can Play the Provided Sound File
    const player = useAudioPlayer(audio);
    //Tracks Whether the Key is Currently being Pressed
    const [pressed, setPressed] = useState(false);


    //Function that gets Called when the Key is Fully Pressed 
    function onPress() {
        //Rewinds the Audio so it Plays from the Start Every Time
        player.seekTo(0);
        //PLays the Assigned Sound
        player.play();
        console.log("Black key pressed!");
    }

    //Components Visual Structure
    return (
        <Pressable
            //Trigger Sound on Full Press
            onPress={onPress}
            //When User Touches the Key
            onPressIn={() => setPressed(true)}
            //When User Lifts off the Key
            onPressOut={() => setPressed(false)} >

            <View style={[
                //Default Style
                styles.blackKey,
                //Visual Feedback when the Key is Pressed
                pressed && styles.blackKeyPressed,
                //Optional Styles from Parent
                style
            ]} >
                <View style={styles.highlight}></View>
            </View>
        </Pressable>
    );
}

//Styles for the BlackKey Component
const styles = StyleSheet.create({
    blackKey: {
        //Allows Manual Placement on the Keyboard
        position: "absolute",
        width: 42,
        height: 140,
        backgroundColor: "#ddcee2ff",
        borderRadius: 7,
        //Flattened Top Edges for Smoother Connection with WhiteKeys
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        //Centers the BlackKey over its Corresponding WhiteKey
        marginLeft: -21,
        shadowColor: "#0f0f0fff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        //Android Shadow
        elevation: 6,
        //Keeps Highlight Inside the Rounded Edges
        overflow: "hidden",
    },
    blackKeyPressed: {
        // Slightly Lighter when Pressed
        backgroundColor: "#c2aec9ff",
        // Reduced Shadow for Pressed-In Effect
        shadowOpacity: 0.3,

    },
    highlight: {
        position: "absolute",
        //Anchored at the Top and Spans Full Width
        top: 0,
        left: 0,
        right: 0,
        height: "15%",
        backgroundColor: "rgba(236, 235, 236, 0.5)",
    },
});