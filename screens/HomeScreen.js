import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Scanner from "../src/Scanner";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Scan" onPress={() => navigation.navigate("Scanner")} />
      {/*<Scanner /> */}
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