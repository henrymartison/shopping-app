import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Button from "./button";
import { AntDesign, Entypo } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";

import colors from "../../utils/colors";

const products = [
  {
    name: "Burberry shirt",
    old_price: "20.00",
    new_price: "17.99",
    img: require("../../assets/images/hotDeals/shirt.jpg")
  },
  {
    name: "Gildan shirt",
    old_price: "20.00",
    new_price: "17.99",
    img: require("../../assets/images/hotDeals/gildanShirt.png")
  },
  {
    name: "Versace",
    old_price: "20.00",
    new_price: "17.99",
    img: require("../../assets/images/hotDeals/versace.jpg")
  },
  {
    name: "Chanel shirt for women",
    old_price: "20.00",
    new_price: "17.99",
    img: require("../../assets/images/hotDeals/chanel.jpg")
  },
  {
    name: "Office wear for men",
    old_price: "20.00",
    new_price: "17.99",
    img: require("../../assets/images/hotDeals/shirt.jpg")
  },
  {
    name: "Gildan shirt",
    old_price: "20.00",
    new_price: "17.99",
    img: require("../../assets/images/hotDeals/gildanShirt.png")
  },
  {
    name: "Versace",
    old_price: "20.00",
    new_price: "17.99",
    img: require("../../assets/images/hotDeals/versace.jpg")
  },
  {
    name: "Chanel shirt for women",
    old_price: "20.00",
    new_price: "17.99",
    img: require("../../assets/images/hotDeals/chanel.jpg")
  }
];

const GridFlatlist = ({
  data = products,
  onRefresh,
  refreshing,
  onPress,
  navigation,
  numOfCols = 3,
  listEmptyComponent,
  showHeader = false
}) => {
  const numOfColumns = numOfCols;

  const formatData = (data, numOfColumns) => {
    const numOfFullRows = Math.floor(data.length / numOfColumns);

    let numOfElementsLastRow = data.length - numOfFullRows * numOfColumns;
    while (
      numOfElementsLastRow !== numOfColumns &&
      numOfElementsLastRow !== 0
    ) {
      data.push({ name: `Blank-${numOfElementsLastRow}`, empty: true });
      numOfElementsLastRow = numOfElementsLastRow + 1;
    }

    return data;
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Text>Hello</Text>
          <Image source={item.img} style={styles.image} />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {showHeader ? (
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.heading}>
            You may also like
          </Text>
          <View>
            <Button
              transparent={true}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={styles.smallText}>View more</Text>
              <Entypo
                name="chevron-small-right"
                size={18}
                color={colors.accent}
              />
            </Button>
          </View>
        </View>
      ) : null}
      <FlatList
        data={formatData(data, numOfColumns)}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={numOfColumns}
        renderItem={({ item }) => {
          if (item.empty === true) {
            return <View style={[styles.container, styles.itemEmpty]} />;
          }
          return (
            <View style={styles.container}>
              <Image source={item.img} style={styles.image} />
              <View style={{ flex: 1, padding: 6, alignItems: "center" }}>
                <Text numberOfLines={1} style={styles.itemName}>
                  US ${item.new_price}
                </Text>
                <Text numberOfLines={1} style={styles.strikeThru}>
                  US ${item.new_price}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default GridFlatlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    margin: 0.5,
    height: Platform.OS === "ios" ? 163 : 143,
    borderColor: "#e2e2e2",
    padding: 4
    // borderWidth: 0.5
  },
  itemEmpty: {
    backgroundColor: "transparent",
    margin: 1
    // borderWidth: 0.5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25
  },
  heading: {
    color: colors.primary1,
    fontWeight: "600",
    fontSize: 20,
    width: "78%"
  },
  smallText: {
    color: colors.accent,
    fontSize: 16
  },
  image: {
    height: "78%",
    width: "100%"
  },
  itemName: {
    color: colors.primary1,
    fontSize: 16,
    fontWeight: "500"
  },
  price: {
    color: colors.accent,
    fontWeight: "500",
    fontSize: 13
  },
  strikeThru: {
    fontSize: 12,
    color: "grey",
    textDecorationColor: "grey",
    textDecorationLine: "line-through"
  }
});
