import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { TouchableOpacity } from "../common/TouchableOpacity";
import { withNavigation } from "react-navigation";

const DealItems = [
  {
    name: "Burberry",
    type: "Generic",
    price: "110",
    disc: "30",
    img: require("../../assets/images/hotDeals/shirt.jpg")
  },
  {
    name: "Gildan",
    type: "Generic",
    price: "87",
    disc: "25",
    img: require("../../assets/images/hotDeals/gildanShirt.png")
  },
  {
    name: "Chanel",
    type: "Generic",
    price: "99",
    disc: "14",
    img: require("../../assets/images/hotDeals/chanel.jpg")
  },
  {
    name: "Versace",
    type: "Generic",
    price: "230",
    disc: "33",
    img: require("../../assets/images/hotDeals/versace.jpg")
  }
];

class HotDeals extends Component {
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Details")}
        style={styles.imageContainer}
      >
        <Image source={item.img} style={styles.image} />
        <View style={styles.optionsRow}>
          <TouchableOpacity>
            <AntDesign name="heart" color="black" size={20} />
          </TouchableOpacity>
          <View style={styles.discountContainer}>
            <Text style={styles.discountText}>%{item.disc}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.subInfo}>{item.type}</Text>
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hot Deals</Text>
        <View>
          <FlatList
            data={DealItems}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
export default withNavigation(HotDeals);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 13,
    marginHorizontal: 10
  },
  title: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
    // fontWeight: "500",
    fontSize: 18,
    fontFamily: "roboto-bold"
  },
  imageContainer: {
    width: width / 3,
    height: 180,
    borderColor: "#e2e2e2",
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10
  },
  discountContainer: {
    height: 18,
    backgroundColor: "tomato",
    width: 40,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7,
    marginVertical: 7,
    position: "absolute",
    top: -3,
    width: "100%"
  },
  discountText: {
    color: "white",
    paddingRight: 7,
    fontWeight: "600"
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 10,
    paddingTop: 5
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 7
  },
  name: {
    fontWeight: "600",
    fontSize: 17
  },
  subInfo: {
    fontSize: 13
  },
  price: {
    fontWeight: "700"
  }
});
