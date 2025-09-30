import { StyleSheet, View } from "react-native";

export default function WhiteKey() {
    return <View style={styles.whiteKey}></View>;
}
const styles = StyleSheet.create({
    whiteKey:{
        borderColor: "black",
        width: 100,
        height: 300,
        borderWidth: 2,
        backgroundColor: "white",
    },
});