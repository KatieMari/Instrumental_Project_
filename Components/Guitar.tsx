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

        <View style={[styles.marker, { left: 750 }]} />
        <View style={[styles.marker, { left: 1200 }]} />

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
    backgroundColor: "#7b5b36",
    borderWidth: 3,
    borderColor: "#f3cae3ff",
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
    backgroundColor: "#e5d9b6",
    opacity: 0.9,
  },

  marker: {
    position: "absolute",
    top: "45%",
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#fff",
    opacity: 0.7,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
});



{/* <View style={styles.headstock}>
    {Array.from({ length: 6 }).map((_, i) => (
        <View key={i} style={[styles.tuningPeg, { top: i * 10 + 5 }]} />))}
</View> */}



// headstock: {
//     position: "absolute",
//     right: -40,
//     top: 0,
//     width: 40,
//     height: "100%",
//     backgroundColor: "#4a321a",
//     borderTopRightRadius: 8,
//     borderBottomRightRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
// },

// tuningPeg: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#d9d9d9",
//     marginVertical: 3,