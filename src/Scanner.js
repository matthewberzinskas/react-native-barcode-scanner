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

  const initScan = ({ navigation }) => {
    console.log("Initiating scan");
    navigation.navigate("Scanner");
  };

  return (
    <View style={styles.scan_container}>
      <Text>Scanner Value: {data}</Text>
      <Button
        title="Scan"
        onPress={() => initScan()}
        //onPress={() => dispatch(SCAN("blahblahblah"))}
      />
      {/* <Button title="RESET STATE" onPress={() => dispatch(SCAN(""))} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  scan_container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
