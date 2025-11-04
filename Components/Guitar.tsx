import { loadAudioPlayerGuitar } from "@/helpers/audio";
import { StyleSheet, View } from "react-native";
import GuitarStrings from "./GuitarStrings";

export default function Guitar() {
  const players = loadAudioPlayerGuitar() as Record<string, any>;

  const guitarNotes = ["Am", "C", "Dm", "F", "Em", "G"];



  return (
    <View style={styles.screen}>
      <View style={styles.guitarNeck}>

        {Array.from({ length: 8 }).map((_, i) => (
          <View key={i} style={[styles.fret, { left: i * 200 + 92 }]} />
        ))}

        <View style={[styles.marker, { left: 770 }]} />
        <View style={[styles.marker, { left: 1170 }]} />

        <View style={styles.stringContainer}>
          {guitarNotes.map((note) => (<GuitarStrings key={note} audio={players[note]} />))}


        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#b9accaff",
    alignItems: "center",
    justifyContent: "center",
  },

  guitarNeck: {
    position: "relative",
    width: 1600,
    height: 640,
    borderRadius: 15,
    backgroundColor: "#faf1f9ff",
    borderWidth: 3,
    borderColor: "#ddd",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 10, height: 10 },
  },

  stringContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "space-between",
  },

  fret: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 8,
    backgroundColor: "#bd9ab5ff",
    opacity: 0.9,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 5, height: 5 },
  },

  marker: {
    position: "absolute",
    top: "46%",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ce98beff",
    opacity: 0.7,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
});



