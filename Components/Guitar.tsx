import { loadAudioPlayerGuitar } from "@/helpers/audio";
import { StyleSheet, View } from "react-native";
import GuitarStrings from "./GuitarStrings";

export default function Guitar() {
    const players = loadAudioPlayerGuitar() as Record<string, any>;

    const guitarNotes = ["A", "C", "D", "E", "Em", "G"];

    return (
        <View style={styles.screen}>
            <View style={styles.guitarNeck}>

                {Array.from({ length: 8 }).map((_, i) => (
                    <View key={i} style={[styles.fret, { left: i * 45 + 40 }]} />
                ))}

                <View style={[styles.marker, { left: 140 }]} />
                <View style={[styles.marker, { left: 275 }]} />

              <View style={styles.stringContainer}>
                            {guitarNotes.map((note) => (<GuitarStrings key={note} audio={players[note]} />))}
                        </View>
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

    guitarHead: {

    },

    guitarStrings: {
        flexDirection: "column",
        zIndex: 1,
        gap: 15,
        marginTop: 13,

    },


});