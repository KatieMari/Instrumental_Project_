import WhiteKey from "@/Components/WhiteKey";
import useOrientation from "@/Hooks/useOrientation";
import { Orientation } from "expo-screen-orientation";
import { StyleSheet, Text, View } from "react-native";


export default function Index() {
  const CurrentOrientation = useOrientation();
  const output = (<View style={styles.containter}>
    <WhiteKey></WhiteKey>
    <WhiteKey></WhiteKey>
    <WhiteKey></WhiteKey>
    <WhiteKey></WhiteKey>
    <WhiteKey></WhiteKey>
    <WhiteKey></WhiteKey>
    <WhiteKey></WhiteKey>
  </View>)
  if (CurrentOrientation === Orientation.LANDSCAPE_LEFT) return output;
  if (CurrentOrientation === Orientation.LANDSCAPE_RIGHT) return output;
  else return <Text>Rotate Device to Landscape</Text>

}


const styles = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2592e'
  }
})