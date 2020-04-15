import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
import CountDown from "react-native-countdown-component";
import moment from "moment";

import SpecialOffer from "../../components/home/SpecialOffer";
import HotDeals from "../../components/home/HotDeals";
import CartIcon from "../../components/common/CartIcon";
import colors from "../../utils/colors";
import Button from "../../components/common/button";
import CustomFlatlist from "../../components/common/CustomFlatlist";
import GridFlatlist from "../../components/common/GridFlatlist";

const TopCatItems = [
  {
    name: "Watches",
    img: {
      uri:
        "https://images.unsplash.com/photo-1533675180235-0ba57d720b51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    name: "Shoes",
    img: {
      uri:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    name: "Glasses",
    img: {
      uri:
        "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    name: "Bags",
    img: {
      uri:
        "https://images.unsplash.com/photo-1562546106-b9cb3a76a206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    name: "T-Shirts",
    img: {
      uri:
        "https://images.unsplash.com/photo-1516442719524-a603408c90cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  },
  {
    name: "Electronics",
    img: {
      uri:
        "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  }
];

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
  state = {
    totalCount: ""
  };

  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };

  async componentDidMount() {
    var that = this;
    var date = moment()
      .utcOffset("+05:30")
      .format("YYYY-MM-DD hh:mm:ss");
    var expirydate = "2020-02-20 07:00:59"; //set your own date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    that.setState({ totalDuration: d });
  }

  renderCatItems = ({ item, index }) => {
    return (
      <View
        style={{
          alignItems: "center",
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
        <Button
          transparent
          style={styles.header}
          onPress={this.toggleDrawer.bind(this)}
        >
          <AntDesign name="menuunfold" size={20} color="grey" />
          <CartIcon />
        </Button>
        <ScrollView style={{ marginBottom: 5 }}>
          <View>
            <Text style={styles.topCatTitle}>
              Popular categories
              <Entypo name="flash" color={colors.accent} size={20} />
            </Text>
            <FlatList
              data={catItems}
              renderItem={this.renderCatItems}
              keyExtractor={(item, index) => index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginStart: 0 }}
            />
          </View>

          <View style={styles.mainContainer}>
            <SpecialOffer />
            <HotDeals />

            <View style={styles.categoryContainer}>
              <View style={styles.row}>
                <Text style={styles.categoryTitle}>Browse by category</Text>
                <Button
                  transparent={true}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text style={styles.smallText}>View all</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={18}
                    color={colors.accent}
                  />
                </Button>
              </View>
              <ScrollView
                style={styles.categoryContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {TopCatItems.map(item => {
                  return (
                    <View key={item.name} style={styles.categoryItem}>
                      <View style={styles.categoryItemImageContainer}>
                        <Image
                          style={styles.categoryItemImage}
                          source={item.img}
                        />
                      </View>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          flex: 1
                        }}
                      >
                        <Text
                          numberOfLines={2}
                          style={styles.categoryItemTitle}
                        >
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </ScrollView>
            </View>

            <View style={{ backgroundColor: "white", marginTop: 20 }}>
              <View
                style={[
                  styles.row,
                  { borderBottomWidth: 0, paddingTop: 5, paddingBottom: 0 }
                ]}
              >
                <Text style={styles.categoryTitle}>Flash sales</Text>
                <CountDown
                  until={this.state.totalDuration}
                  timeToShow={["H", "M", "S"]}
                  onFinish={() => alert("Deals are over!!!")}
                  size={10}
                  digitStyle={{
                    backgroundColor: colors.darkBlue,
                    borderRadius: 3
                  }}
                  digitTxtStyle={{ color: "#fff", fontSize: 12 }}
                  timeLabels={{ h: "", m: "", s: "" }}
                />
              </View>
              <CustomFlatlist />
              <Button
                transparent
                style={[
                  styles.row,
                  {
                    // borderBottomWidth: 0,
                    borderTopWidth: 0.5,
                    borderTopColor: "#e2e2e2",
                    paddingVertical: 12
                  }
                ]}
              >
                <Text
                  style={{
                    color: colors.accent,
                    fontWeight: "500",
                    fontSize: 16
                  }}
                >
                  View more
                </Text>
                <Entypo
                  name="chevron-thin-right"
                  color={colors.accent}
                  size={15}
                />
              </Button>
            </View>

            <View style={[styles.categoryContainer, { backgroundColor: null }]}>
              <View style={[styles.row, { backgroundColor: "white" }]}>
                <Text style={styles.categoryTitle}>Social Savings</Text>
                <Button
                  transparent={true}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Text style={styles.smallText}>View all</Text>
                  <Entypo
                    name="chevron-small-right"
                    size={18}
                    color={colors.accent}
                  />
                </Button>
              </View>
              <GridFlatlist />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(225,225,225, 0.3)"
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
    backgroundColor: "#fff",
    borderColor: "#e2e2e2"
  },
  itemText: {
    textAlign: "center",
    paddingTop: 4
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain"
  },
  topCatTitle: {
    color: colors.primary1,
    fontWeight: "700",
    textTransform: "uppercase",
    fontSize: 13,
    margin: 15,
    marginTop: 0,
    textDecorationLine: "underline",
    textDecorationColor: colors.primary1
  },
  categoryContainer: {
    minHeight: 130,
    backgroundColor: "white",
    marginTop: 20
    // paddingBottom: 5
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#e2e2e2",
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  categoryTitle: {
    marginLeft: 5,
    fontWeight: "500",
    fontSize: 18,
    color: colors.primary1
  },
  categoryItem: {
    height: 140,
    width: 107,
    // backgroundColor: "orange",
    marginHorizontal: 5
  },
  categoryItemImageContainer: {
    backgroundColor: "#e2e2e2",
    height: "77%",
    borderRadius: 5
  },
  categoryItemImage: {
    height: null,
    width: null,
    flex: 1,
    borderRadius: 5
  },
  categoryItemTitle: {
    textAlign: "center",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    color: colors.primary1,
    fontWeight: "500"
  },
  smallText: {
    color: colors.accent,
    fontSize: 16
  }
});
