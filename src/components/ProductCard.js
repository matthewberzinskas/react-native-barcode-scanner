import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

export default function ProductCard(props) {
  // Redux storage
  const data = useSelector((state) => state.scanner.data);
  const dispatch = useDispatch();

  //console.log(JSON.stringify(data, null, 2));
  console.log(data.title);
  let img_uri = "";
  console.log(img_uri, typeof img_uri);

  return (
    <View style={styles.product_container}>
      <Text>{data.title}</Text>
      <View style={styles.image_container}>
        <Image
          source={{
            uri: img_uri,
          }}
        />
      </View>
      <Text>Product Information: </Text>
      <Text>TYPE: {data.type} </Text>
      <Text>EPC: {data.value} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  product_container: {
    flexDirection: "column",
    borderWidth: 2,
    borderColor: "red",
    width: "85%",
  },
  image_container: {
    borderWidth: 1,
    borderColor: "yellow",
    height: 250,
    width: 250,
  },
});
