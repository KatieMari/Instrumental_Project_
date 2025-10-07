import WhiteKey from "@/Components/WhiteKey";
import { loadAudioPlayer } from "@/helpers/audio";
import { StyleSheet, View } from "react-native";

export default function Piano() {
  const players = loadAudioPlayer();
  return (
    <View style={styles.containter}>
      <WhiteKey audio={players.C4}></WhiteKey>
      <WhiteKey audio={players.D4}></WhiteKey>
      <WhiteKey audio={players.E4}></WhiteKey>
      <WhiteKey audio={players.F4}></WhiteKey>
      <WhiteKey audio={players.G4}></WhiteKey>
      <WhiteKey audio={players.A4}></WhiteKey>
      <WhiteKey audio={players.B4}></WhiteKey>
    </View>);
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  }
});