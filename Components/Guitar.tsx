import { loadAudioPlayerGuitar } from "@/helpers/audio";
import { StyleSheet, View } from "react-native";
import GuitarStrings from "./GuitarStrings";

export default function Guitar() {
    const players = loadAudioPlayerGuitar() as Record<string, any>;

    const guitarNotes = ["A", "C", "D", "E", "Em", "G"];

    return (
        <View style={styles.screen}>
            <View style={styles.guitar}>
                <View style={styles.guitarBase}>
                    <View style={styles.guitarStrings}>
                        {guitarNotes.map((note) => (<GuitarStrings key={note} audio={players[note]} />))}
                    </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#b9accaff",
        alignItems: "center",
        justifyContent: "center",
    },

    guitar: {
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        transform: [{ scale: 3 }],
    },
    guitarBase: {
        width: 400,
        height: 150,
        backgroundColor: "#f5e0eaff",
        borderRadius: 5,
        overflow: "hidden",
        shadowColor: "#504e4eff",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.28,
        shadowRadius: 5,
        
    },

    guitarStrings: {
        flexDirection: "column",
        zIndex: 1,
        gap: 15,
        marginTop: 13,
        
    },


});