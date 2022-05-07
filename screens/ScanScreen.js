import React, { useState, useEffect } from "react";
import { Dimensions, View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { useSelector, useDispatch } from "react-redux";
import { SCAN, RESET } from "../redux/scanSlice";

import ProductCard from "../src/ProductCard";

export default function ScanScreen({ navigation }) {
  // Scan variables
  const [hasPermission, setHasPermission] = useState(null);
  const [scan, setScan] = useState(false);

  // Redux storage
  const data = useSelector((state) => state.scanner.value);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // Request permissions
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Display text based on permissions
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // When scan button is pressed, trigger conditional display
  const handleScan = () => {
    console.log("Initating scan...");
    setScan(true);
  };

  // Clears the scanned data from redux
  const handleReset = () => {
    dispatch(RESET());
  };

  // Print scan results to user, store in redux, reset conditional display
  const handleBarCodeScanned = ({ type, data }) => {
    let payload = {
      value: data,
      type: type,
    };
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    dispatch(SCAN(payload));
    setScan(false);
  };

  return (
    <View style={styles.container}>
      {scan && (
        <View style={styles.cover}>
          <BarCodeScanner
            onBarCodeScanned={scan ? handleBarCodeScanned : undefined}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
      )}
      <ProductCard data={data} />
      <View style={styles.buttonGroup}>
        <Button title="Initiate Scan" onPress={() => handleScan()} />
        <Button title="Reset" onPress={() => handleReset()} />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
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
    borderWidth: 1,
    padding: 5,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGroup: {
    borderWidth: 2,
    borderColor: "green",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
