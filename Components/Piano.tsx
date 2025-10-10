import WhiteKey from "@/Components/WhiteKey";
import { loadAudioPlayer } from "@/helpers/audio";
import React from "react";
import { StyleSheet, View } from "react-native";
import BlackKey from "./BlackKey";

export default function Piano() {
  const players = loadAudioPlayer() as Record<string, any>;

  const whiteNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];
  const blackNotes = [
    { note: "Db4", left: 62 },
    { note: "Eb4", left: 125 },
    { note: "Gb4", left: 248 },
    { note: "Ab4", left: 310 },
    { note: "Bb4", left: 373 },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.piano}>

        <View style={styles.whiteKeys}>
          {whiteNotes.map((note) => (
            <WhiteKey key={note} audio={players[note]} />
          ))}
        </View>

        <View style={styles.blackKeys}>
          {blackNotes.map(({ note, left }) => (
            <BlackKey key={note} audio={players[note]} style={{ left }} />
          ))}
        </View>

        {/* <View style={styles.whiteKeys}>
          <WhiteKey audio={players.C4} />
          <WhiteKey audio={players.D4} />
          <WhiteKey audio={players.E4} />
          <WhiteKey audio={players.F4} />
          <WhiteKey audio={players.G4} />
          <WhiteKey audio={players.A4} />
          <WhiteKey audio={players.B4} />
        </View> */}
        {/* 
        <View style={styles.blackKeys}>
          <BlackKey audio={players.Db4} style={{ left: 62 }} />
          <BlackKey audio={players.Eb4} style={{ left: 125 }} />
          <BlackKey audio={players.Gb4} style={{ left: 248 }} />
          <BlackKey audio={players.Ab4} style={{ left: 310 }} />
          <BlackKey audio={players.Bb4} style={{ left: 373 }} />
        </View> */}


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#b9accaff",       // dark background for contrast
    alignItems: "center",           // center horizontally
    justifyContent: "center",       // center vertically
  },
  piano: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    transform: [{ scale: 3 }],    // scales up entire piano (adjust 1.2–1.5 as you like)
  },
  whiteKeys: {
    flexDirection: "row",
    zIndex: 1,
  },
  blackKeys: {
    position: "absolute",
    top: 0,                        // how far down black keys sit on white keys
    left: 0,
    right: 0,
    zIndex: 2,
  },
});
