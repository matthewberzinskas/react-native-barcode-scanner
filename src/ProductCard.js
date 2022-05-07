import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function ProductCard(props) {
  // Redux storage
  const data = useSelector((state) => state.scanner);
  const dispatch = useDispatch();

  console.log(JSON.stringify(data, null, 2));

  return (
    <View style={styles.product_container}>
      <Text>Product Information: </Text>
      <Text>TYPE: {data.type} </Text>
      <Text>EPC: {data.value} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  product_container: {
    borderWidth: 2,
    borderColor: "red",
    width: "80%",
  },
});
