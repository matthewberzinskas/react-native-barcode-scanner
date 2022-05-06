import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  Platform,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { SCAN } from "../redux/scanSlice";

export default function Scanner() {
  const data = useSelector((state) => state.scanner.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Scanner Value: {data}</Text>
      <Button
        title="SET STATE"
        onPress={() => dispatch(SCAN("blahblahblah"))}
      />
      <Button title="RESET STATE" onPress={() => dispatch(SCAN(""))} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
