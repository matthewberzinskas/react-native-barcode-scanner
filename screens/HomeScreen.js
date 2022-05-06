import * as React from "react";
import { View, Text } from "react-native";

import Scanner from "../src/Scanner";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Scanner />
    </View>
  );
}
