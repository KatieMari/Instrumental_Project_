import WhiteKey from "@/Components/WhiteKey";
import { StyleSheet, Text, View } from "react-native";

export default function Index(){
  return <View style={styles.containter}>
    <WhiteKey></WhiteKey>
  </View>
}


export default function Index() {
  return (
    <View
      style={styles.containter}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containter:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#2592e'
  }
})