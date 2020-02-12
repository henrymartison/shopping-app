import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { TouchableOpacity } from "../../components/common/TouchableOpacity";
import { Ionicons, Feather } from "@expo/vector-icons";
import CartIcon from "../../components/common/CartIcon";

class Details extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="ios-arrow-back" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <View
            style={[styles.backButton, { backgroundColor: "rgba(0,0,0,.06)" }]}
          >
            <CartIcon />
          </View>
        </View>
        <View style={styles.mainContainer}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <Text>Hello World</Text>
            </View>
          </ScrollView>
          <View style={styles.bottomBar}>
            <View>
              <Text style={styles.status}>Now</Text>
              <Text style={styles.newPrice}>$97.99</Text>
              <Text style={styles.discount}>50% Dsnt</Text>
            </View>
            {/* <Text style={{ fontSize: 25 }}>.</Text> */}
            <View>
              <Text style={styles.status}>Before</Text>
              <Text style={styles.oldPrice}>$194.99</Text>
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3edf7"
    // backgroundColor: "rgba(255,99,71, 0.6)"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 14,
    marginBottom: 25
  },
  backButton: {
    backgroundColor: "white",
    height: 43,
    width: 43,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontSize: 20
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "flex-end"
  },
  bottomBar: {
    height: 80,
    backgroundColor: "rgba(0,0,0,.9)",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  buyButton: {
    backgroundColor: "tomato",
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },
  buttonText: {
    fontWeight: "700"
  },
  status: {
    fontWeight: "600",
    color: "white"
  },
  newPrice: {
    color: "tomato",
    fontWeight: "500",
    fontSize: 18,
    paddingTop: 3
  },
  oldPrice: {
    fontWeight: "500",
    fontSize: 18,
    color: "#a5a5a5",
    textDecorationLine: "line-through",
    textDecorationColor: "#a5a5a5",
    textDecorationStyle: "solid"
  },
  discount: {
    color: "grey",
    paddingTop: 3
  }
});
