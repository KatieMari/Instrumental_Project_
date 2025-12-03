import WhiteKey from "@/Components/WhiteKey";
import { loadAudioPlayer } from "@/helpers/audio";
import { StyleSheet, View } from "react-native";
import BlackKey from "./BlackKey";

export default function Piano() {
  // Load all Audio PLayers for Piano Notes
  const players = loadAudioPlayer() as Record<string, any>;

  // Labels for each WhiteKey on the KeyBoard
  const whiteNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

  // BlackKeys Require Special Horizontal Placement - so each Entry Includes a Note and Left Offset
  const blackNotes = [
    { note: "Db4", left: 62 },
    { note: "Eb4", left: 125 },
    { note: "Gb4", left: 248 },
    { note: "Ab4", left: 310 },
    { note: "Bb4", left: 373 },
  ];

  return (
    <View style={styles.screen}>
      {/* Main Container that Holds the Full Piano */}
      <View style={styles.piano}>
        {/* Row of WhiteKeys Aligned Side-by-Side */}
        <View style={styles.whiteKeys}> 
          {whiteNotes.map((note) => (<WhiteKey key={note} audio={players[note]} />))}
        </View>

        {/* BlackKeys Positioned Absolutely Above the White Keys */}
        <View style={styles.blackKeys}>
          {blackNotes.map(({ note, left }) => (
            <BlackKey key={note} audio={players[note]} style={{ left }} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // FullScreen Centered Background for the Piano
  screen: {
    flex: 1,
    backgroundColor: "#b9accaff",       
    alignItems: "center",           
    justifyContent: "center",       
  },

  // Scaled Piano Container
  piano: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    // Zoom in for a Larger Piano
    transform: [{ scale: 3 }],    
  },

  // Horizontal Row of WhiteKeys
  whiteKeys: {
    flexDirection: "row",
    // BlackKeys Sit Above these
    zIndex: 1,
  },

  // BlackKeys Stack Above the WhiteKeys
  blackKeys: {
    position: "absolute",
    top: 0,                        
    left: 0,
    right: 0,
    // Ensures BlackKeys Appear Visually on top
    zIndex: 2,
  },
});





























// FOR TASK DOCUMENTATION
  // {/* <View style={styles.whiteKeys}>
  //         <WhiteKey audio={players.C4} />
  //         <WhiteKey audio={players.D4} />
  //         <WhiteKey audio={players.E4} />
  //         <WhiteKey audio={players.F4} />
  //         <WhiteKey audio={players.G4} />
  //         <WhiteKey audio={players.A4} />
  //         <WhiteKey audio={players.B4} />
  //       </View> */}
  //       {/* 
  //       <View style={styles.blackKeys}>
  //         <BlackKey audio={players.Db4} style={{ left: 62 }} />
  //         <BlackKey audio={players.Eb4} style={{ left: 125 }} />
  //         <BlackKey audio={players.Gb4} style={{ left: 248 }} />
  //         <BlackKey audio={players.Ab4} style={{ left: 310 }} />
  //         <BlackKey audio={players.Bb4} style={{ left: 373 }} />
  //       </View> */}