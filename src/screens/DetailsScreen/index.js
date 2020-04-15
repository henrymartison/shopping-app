import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList
} from "react-native";
import StarRating from "react-native-star-rating";
import ReadMore from "react-native-read-more-text";

import { TouchableOpacity } from "../../components/common/TouchableOpacity";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import CartIcon from "../../components/common/CartIcon";
import { productCat1 } from "../../../assets/data/dummy";

import colors from "../../utils/colors";
import ReviewCard from "../../components/details/ReviewCard";
import Button from "../../components/common/button";
import ProductOptionsModal from "../../components/modals/ProductOptionsModal";
import CustomFlatlist from "../../components/common/CustomFlatlist";

const Circle = props => {
  return <View style={[styles.circle, props.style]}>{props.children}</View>;
};

class Details extends Component {
  state = {
    isVisible: false
  };

  toggleModal = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={styles.readMoreText} onPress={handlePress}>
        Show more
      </Text>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={styles.readMoreText} onPress={handlePress}>
        Hide
      </Text>
    );
  };

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
                padding: 20
              }}
            >
              <View style={styles.row}>
                <View style={styles.smBox}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: colors.primary1
                    }}
                  >
                    SALE
                  </Text>
                </View>
                <View>
                  <AntDesign name="heart" color={colors.accent} size={20} />
                </View>
              </View>
              <View style={styles.imageContainer} />
              {/* <FlatList
              data={productCat1.images}
              renderItem={({ item }) => <Text>Hello world</Text>}
              keyExtractor={item => item.id}
              style={{ flex: 1 }}
            /> */}

              <View style={[styles.row, { marginTop: 13 }]}>
                <Text numberOfLines={2} style={styles.productTitle}>
                  Burberry shirt for men
                </Text>
                <StarRating
                  starSize={16}
                  emptyStarColor="#e2e2e2"
                  fullStarColor={colors.primary2}
                  halfStarColor={colors.primary2}
                  rating={4}
                />
              </View>
              <View style={{ marginVertical: 15 }}>
                <ReadMore
                  numberOfLines={3}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                  onReady={this._handleTextReady}
                >
                  <Text style={{ color: "grey" }}>
                    Aliquip ex esse reprehenderit reprehenderit officia eiusmod
                    exercitation eu aliquip anim proident labore sint. Dolore
                    dolore laborum labore est laboris esse sit nostrud qui
                    ullamco quis eu do quis. Fugiat nostrud laboris irure do
                    deserunt sint esse ea. Eu velit adipisicing ad excepteur
                    velit. In occaecat do duis pariatur non dolore amet cillum
                    occaecat deserunt enim. Ipsum proident velit voluptate duis
                    commodo sint velit sunt quis deserunt sint officia nisi.
                    Amet aliqua cupidatat labore pariatur occaecat ullamco
                    mollit aliqua id fugiat.
                  </Text>
                </ReadMore>
              </View>

              <View style={styles.reviewContainer}>
                <View style={styles.row}>
                  <Text
                    style={[
                      styles.productTitle,
                      { fontWeight: "500", fontSize: 23, textAlign: "center" }
                    ]}
                  >
                    Ratings & Reviews (27)
                  </Text>
                  <View style={styles.circleContainer}>
                    <Circle
                      style={{
                        backgroundColor: "#e2e2e2",
                        marginRight: -10,
                        zIndex: 3
                      }}
                    >
                      <Image
                        style={[styles.image, { borderRadius: 39 / 2 }]}
                        source={{
                          uri:
                            "https://images.unsplash.com/photo-1553928541-d0ca7560d96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        }}
                      />
                    </Circle>
                    <Circle
                      style={{
                        backgroundColor: "#e2e2e2",
                        marginRight: -10,
                        zIndex: 2
                      }}
                    >
                      <Image
                        style={[styles.image, { borderRadius: 39 / 2 }]}
                        source={{
                          uri:
                            "https://images.unsplash.com/photo-1529008338-310c24f458ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        }}
                      />
                    </Circle>
                    <Circle
                      style={{
                        backgroundColor: "#e2e2e2",
                        marginRight: -10,
                        zIndex: 1
                      }}
                    >
                      <Image
                        style={[styles.image, { borderRadius: 39 / 2 }]}
                        source={{
                          uri:
                            "https://images.unsplash.com/photo-1579935110464-fcd041be62d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        }}
                      />
                    </Circle>
                  </View>
                </View>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <Button
                  style={styles.viewAllBtn}
                  onPress={() => this.props.navigation.navigate("Reviews")}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "600",
                      color: colors.primary1
                    }}
                  >
                    See all
                  </Text>
                </Button>
              </View>

              <View style={{}}>
                <CustomFlatlist showHeader={true} />
              </View>
            </View>
          </ScrollView>
          <View style={styles.bottomBar}>
            <View>
              <Text style={styles.status}>Now</Text>
              <Text style={styles.newPrice}>$97.99</Text>
              <Text style={styles.discount}>50% Dsnt</Text>
            </View>
            <View>
              <Text style={styles.status}>Before</Text>
              <Text style={styles.oldPrice}>$194.99</Text>
            </View>
            <TouchableOpacity
              style={styles.buyButton}
              onPress={this.toggleModal}
            >
              <Text style={styles.buttonText}>+ Buy</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ProductOptionsModal
          isVisible={this.state.isVisible}
          actionOpenClose={this.toggleModal}
        />
      </View>
    );
  }
}
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3edf7"
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
    borderTopRightRadius: 30
    // justifyContent: "flex-end"
  },
  imageContainer: {
    width: "100%",
    height: 320,
    borderRadius: 10,
    borderColor: "#e2e2e2",
    borderWidth: 1,
    marginTop: 14
    // backgroundColor: "orange"
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 10
  },
  productTitle: {
    color: colors.primary1,
    fontSize: 21,
    fontWeight: "700",
    width: "64%"
  },
  reviewContainer: {
    flex: 1
  },
  viewAllBtn: {
    width: "100%",
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: colors.primary2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 6
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
    backgroundColor: colors.primary1,
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },
  buttonText: {
    fontWeight: "700",
    color: colors.primary2
  },
  status: {
    fontWeight: "600",
    color: "white"
  },
  newPrice: {
    color: colors.primary2,
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
  },
  smBox: {
    backgroundColor: colors.primary2,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2
  },
  readMoreText: {
    color: colors.accent,
    marginTop: 5,
    fontWeight: "600"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  circleContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1
  },
  circle: {
    height: 39,
    width: 39,
    borderRadius: 39 / 2,
    borderColor: "#fff",
    borderWidth: 2
  }
});
