import WhiteKey from "@/Components/WhiteKey";
import { loadAudioPlayer } from "@/helpers/audio";
import { StyleSheet, View } from "react-native";

export default function Piano() {
  const players = loadAudioPlayer();
  return (
    <View style={styles.containter}>
      <WhiteKey></WhiteKey>
      <WhiteKey></WhiteKey>
      <WhiteKey></WhiteKey>
      <WhiteKey></WhiteKey>
      <WhiteKey></WhiteKey>
      <WhiteKey></WhiteKey>
      <WhiteKey></WhiteKey>
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