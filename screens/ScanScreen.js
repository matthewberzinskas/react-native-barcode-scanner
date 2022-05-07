import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { useSelector, useDispatch } from "react-redux";
import { SCAN } from "../redux/scanSlice";

export default function ScanScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);

  const [scan, setScan] = useState(false);
  const [scanned, setScanned] = useState(false);

  const data = useSelector((state) => state.scanner.value);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const initScan = () => {
    console.log("Initating scan...");
    setScan(true);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    //setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    dispatch(SCAN(data));
    setScan(false);
  };

  return (
    <View style={styles.container}>
      {scan && (
        <View style={styles.cover}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      )}
      <Text> Scan Data: {data}</Text>
      <Button title="Initiate Scan" onPress={() => initScan()} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    zIndex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
