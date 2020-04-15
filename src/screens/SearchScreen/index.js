import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  SafeAreaView,
  SectionList,
  Alert,
  Dimensions,
  Keyboard
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../utils/colors";
import Button from "../../components/common/button";

const width = Dimensions.get("window").width;

class SearchScreen extends Component {
  state = {
    slideAnim: new Animated.Value(width - 30),
    searchbarFocused: false
  };

  slideInAnim = () => {
    Animated.timing(this.state.slideAnim, {
      toValue: width - 100,
      duration: 1000
    }).start();
    this.setState({ searchbarFocused: !this.state.searchbarFocused });
  };
  slideOutAnim = () => {
    Animated.timing(this.state.slideAnim, {
      toValue: 0,
      duration: 1000
    }).start();
    this.setState({ searchbarFocused: !this.state.searchbarFocused });
  };

  componentDidMount() {
    this._keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      this._keyboardWillShow
    );

    this._keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this._keyboardWillHide
    );
  }

  _keyboardWillShow = () => {
    Animated.timing(this.state.slideAnim, {
      toValue: width - 100,
      duration: 800
    }).start();
    this.setState({ searchbarFocused: true });
  };

  _keyboardWillHide = () => {
    Animated.timing(this.state.slideAnim, {
      toValue: width - 30,
      duration: 800
    }).start();
    this.setState({ searchbarFocused: false });
  };

  actionFilter = () => {
    this.props.navigation.navigate("SearchFilter");
  };

  GetSectionListItem = item => {
    //Function for click on an item
    Alert.alert(item);
  };
  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };
  render() {
    var A = [
      { id: "1", value: "Apple watch series 4" },
      { id: "2", value: "Huawei Y9" },
      { id: "3", value: "iPhone Xr" }
    ];
    var B = [
      { id: "4", value: "iPhone Xs" },
      { id: "5", value: "Airpods pro" },
      { id: "6", value: "Ps4 slim" },
      { id: "7", value: "Versace shirt" },
      { id: "8", value: "Macbook pro 2018" },
      { id: "9", value: "3-in-1 plain shirt" },
      { id: "10", value: "Series 5" }
    ];
    var C = [
      { id: "11", value: "Jabra move headphones" },
      { id: "12", value: "Beats solo 3" },
      { id: "13", value: "Beats studio 3" },
      { id: "14", value: "Skull candy pro" }
    ];
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Animated.View
            style={[styles.searchContainer, { width: this.state.slideAnim }]}
          >
            <AntDesign name="search1" size={18} color="#9f9fa3" />
            <TextInput
              style={styles.searchInput}
              placeholder="I'm shopping for..."
              placeholderTextColor="#9f9fa3"
              clearButtonMode="always"
              // onFocus={this.slideInAnim}
            />
          </Animated.View>
          {this.state.searchbarFocused ? (
            <Button transparent onPress={() => Keyboard.dismiss()}>
              <Text style={{ color: colors.accent, fontSize: 17 }}>Cancel</Text>
            </Button>
          ) : null}
        </View>
        <View style={{ marginTop: Platform.OS == "ios" ? 10 : 20, flex: 1 }}>
          <SectionList
            ItemSeparatorComponent={this.FlatListItemSeparator}
            sections={[
              { title: "Recent Searches", data: A },
              { title: "Popular Searches", data: B },
              { title: "Recommended products", data: C }
            ]}
            renderSectionHeader={({ section }) => (
              <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
            )}
            renderItem={({ item }) => (
              // Single Comes here which will be repeatative for the FlatListItems
              <Text
                style={styles.SectionListItemStyle}
                //Item Separator View
                onPress={this.GetSectionListItem.bind(
                  this,
                  "Id: " + item.id + " Name: " + item.value
                )}
              >
                {item.value}
              </Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    backgroundColor: "#e3e3e3e5",
    height: 36,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    marginHorizontal: 14,
    marginTop: 5
  },
  searchInput: {
    // backgroundColor: "red",
    flex: 1,
    marginLeft: 5,
    fontSize: 16
  },
  SectionHeaderStyle: {
    backgroundColor: "#e2e2e2",
    fontSize: 17,
    fontWeight: "500",
    padding: 5,
    color: colors.primary1
  },
  SectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: colors.darkBlue,
    backgroundColor: "#F5F5F5"
  }
});
