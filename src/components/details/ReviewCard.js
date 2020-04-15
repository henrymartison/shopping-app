import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";
import colors from "../../utils/colors";

class ReviewCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.title}>
            Lorem ipsum
          </Text>
          <Text style={styles.rhText}>Aug 12, 2018</Text>
        </View>
        <View style={styles.row}>
          <StarRating
            starSize={14}
            emptyStarColor="#ccc"
            fullStarColor={colors.primary2}
            halfStarColor={colors.primary2}
            rating={4}
          />
          <Text
            numberOfLines={1}
            style={[styles.rhText, { textAlign: "right" }]}
          >
            Henry Martison
          </Text>
        </View>
        <Text numberOfLines={4} style={styles.content}>
          Nostrud eiusmod non do excepteur adipisicing laboris cillum irure
          velit consectetur adipisicing. Ex ullamco consequat ipsum esse.
          Aliquip commodo eu excepteur voluptate ut esse consectetur nisi esse
          consequat tempor. Culpa voluptate sunt anim do culpa. Ipsum ullamco
          occaecat elit exercitation sit ullamco quis irure exercitation sint
          consectetur. Velit ullamco Lorem ullamco ipsum sit sit proident anim.
        </Text>
      </View>
    );
  }
}
export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f0f0f8",
    borderRadius: 8,
    padding: 17,
    marginTop: 8
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: colors.primary1,
    width: "76%"
  },
  rhText: {
    color: "grey",
    width: "44%"
  },
  content: {
    color: colors.darkBlue,
    fontSize: 13
  }
});
