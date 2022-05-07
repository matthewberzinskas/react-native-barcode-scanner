import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function ProductCard(props) {
  // Redux storage
  const data = useSelector((state) => state.scanner);
  const dispatch = useDispatch();

  console.log(JSON.stringify(data, null, 2));

  return (
    <View>
      <Text>Product Information: </Text>
      <Text>TYPE: {data.type} </Text>
      <Text>EPC: {data.value} </Text>
    </View>
  );
}
