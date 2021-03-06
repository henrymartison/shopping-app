import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "./TouchableOpacity";
import { SimpleLineIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

class CartIcon extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Cart")}>
        <View style={{ padding: 5 }}>
          <View
            style={{
              position: "absolute",
              height: 18,
              width: 18,
              borderRadius: 18 / 2,
              backgroundColor: "tomato",
              right: 0,
              bottom: 16,
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2000
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>3</Text>
          </View>
          <View>
            <SimpleLineIcons name="basket" size={20} color="grey" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(CartIcon);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
