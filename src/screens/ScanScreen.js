import React, { useState, useEffect } from "react";
import { Dimensions, View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import { useSelector, useDispatch } from "react-redux";
import { SCAN, RESET, SET } from "../redux/scanSlice";

import ProductCard from "../components/ProductCard";

export default function ScanScreen({ navigation }) {
  // Scan variables
  const [hasPermission, setHasPermission] = useState(null);
  const [scan, setScan] = useState(false);
  const [scanned, setScanned] = useState(false);

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
    setScanned(true);
  };

  /*   const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]); */

  //veGDuJCVeXuWnQfkkpx2BdjxM1iN9oszXM7PIG5M
  //https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=veGDuJCVeXuWnQfkkpx2BdjxM1iN9oszXM7PIG5M

  const handleLookup = () => {
    console.log("Looking up data", data);
    fetch(`https://api.upcitemdb.com/prod/trial/lookup?upc=${data}`)
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        dispatch(SET(result));
      });
    /*     fetch(`https://world.openfoodfacts.org/api/v0/product/${data}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      ); */
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
      {scanned && <ProductCard data={data} />}
      <View style={styles.bottomView}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Initiate Scan" onPress={() => handleScan()} />
          </View>
          <View style={styles.button}>
            <Button title="Lookup" onPress={() => handleLookup()} />
          </View>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => handleReset()} />
          </View>
          <View style={styles.button}>
            <Button title="Go Back" onPress={() => navigation.goBack()} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#EE5407",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    padding: 2,
  },
  cover: {
    zIndex: 1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});
