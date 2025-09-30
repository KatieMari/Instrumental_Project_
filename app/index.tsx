import WhiteKey from "@/Components/WhiteKey";
import { StyleSheet, View } from "react-native";

export default function Index(){
  return <View style={styles.containter}>
    <WhiteKey></WhiteKey>
  </View>
}


const styles = StyleSheet.create({
  containter:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2592e'
  }
})