import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import SpecialOffer from "../../components/home/SpecialOffer";

const catItems = [
  {
    name: "Watches",
    img: require("../../assets/images/topRowIcons/wristwatch.png")
  },
  {
    name: "Shoes",
    img: require("../../assets/images/topRowIcons/sneakers.png")
  },
  {
    name: "Glasses",
    img: require("../../assets/images/topRowIcons/sunglasses.png")
  },
  {
    name: "Bags",
    img: require("../../assets/images/topRowIcons/bag.png")
  },
  {
    name: "T-Shirts",
    img: require("../../assets/images/topRowIcons/tshirt.png")
  },
  {
    name: "Electronics",
    img: require("../../assets/images/topRowIcons/phone.png")
  }
];

class Home extends Component {
  renderCatItems = ({ item, index }) => {
    return (
      <View
        style={{
          alignItems: "center",
          // backgroundColor: "orange",         // check width later
          // width: "30%",
          height: "20%",
          justifyContent: "center",
          marginLeft: 15
        }}
      >
        <View style={styles.itemContainer}>
          <Image source={item.img} style={styles.image} />
        </View>
        <Text numberOfLines={1} style={styles.itemText}>
          {item.name}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.header}>
          <AntDesign name="menuunfold" size={20} color="grey" />
          <Feather name="shopping-cart" size={20} color="grey" />
        </View>
        <FlatList
          data={catItems}
          renderItem={this.renderCatItems}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginEnd: 20, backgroundColor: "orange" }}
        />
        <SpecialOffer />
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    height: 50,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row"
  },
  itemContainer: {
    height: 75,
    width: 75,
    borderRadius: 75 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(225,225,225, 0.3)",
    // borderWidth: 0.5,
    borderColor: "#e2e2e2"
    // marginLeft: 15
  },
  itemText: {
    textAlign: "center",
    paddingTop: 4
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain"
  }
});
