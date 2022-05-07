import { View, Text, StyleSheet, Button } from "react-native";

export default function ScanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text> Hello from Scanner </Text>
      <Button title="Initiate Scan" onPress={() => initScan()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
