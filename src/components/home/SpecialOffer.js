import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SpecialOffer = props => (
  <View style={styles.container}>
    <Text style={styles.title}>Special Offers</Text>
    <ScrollView
      //   style={{ padding: 10 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/common/background4.jpg")}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.detailsText}>Details</Text>
          <Ionicons name="ios-arrow-round-forward" size={30} color="white" />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/common/background3.jpg")}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.detailsText}>Details</Text>
          <Ionicons name="ios-arrow-round-forward" size={30} color="white" />
        </View>
      </View>
    </ScrollView>
  </View>
);
export default SpecialOffer;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "orange",
    marginTop: 20,
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
    width: width - 80,
    height: 150,
    borderColor: "#e2e2e2",
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10
  },
  detailContainer: {
    height: 30,
    backgroundColor: "tomato",
    width: "30%",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  detailsText: {
    color: "white",
    paddingRight: 7,
    fontWeight: "600"
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 10
  }
});
