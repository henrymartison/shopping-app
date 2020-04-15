import React from "react";
import { View, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/HomeScreen/Home";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

import Loading from "./src/screens/AuthScreen/Loading";
import Login from "./src/screens/AuthScreen/Login";
import Register from "./src/screens/AuthScreen/Register";
import Profile from "./src/screens/ProfileScreens";
import SearchScreen from "./src/screens/SearchScreen";
import Saved from "./src/screens/SavedScreens";
import Details from "./src/screens/DetailsScreen";
import ReviewsScreen from "./src/screens/ReviewsScreen";
import { TouchableOpacity } from "./src/components/common/TouchableOpacity";
import colors from "./src/utils/colors";
import CartScreen from "./src/screens/Cartscreen";
import { createDrawerNavigator } from "react-navigation-drawer";

const DetailsStack = createStackNavigator(
  {
    Details: {
      screen: Details,
      navigationOptions: { header: null }
    },
    Reviews: ReviewsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: "Ratings & Reviews",
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 12 }}
        >
          <Ionicons name="ios-arrow-back" size={25} color={colors.darkBlue} />
        </TouchableOpacity>
      )
    })
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: { header: null }
    },
    Details: {
      screen: DetailsStack,
      navigationOptions: { header: null }
    },
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: { color: colors.darkBlue, fontWeight: "500" },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ paddingLeft: 12 }}
        >
          <Ionicons name="ios-arrow-back" size={25} color={colors.darkBlue} />
        </TouchableOpacity>
      )
    })
  }
);

const AppContainer = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarIcon: ({ tintColor }) => (
            <AntDesign name="home" size={20} color={tintColor} />
          )
        };
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Feather name="search" size={20} color={tintColor} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Feather name="bookmark" size={20} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="user" size={20} color={tintColor} />
        )
      }
    }
  },
  {
    defaultNavigationOptions: null,
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      showLabel: false,
      labelPosition: "beside-icon",
      style: {
        borderTopColor: "transparent",
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 15,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        height: 60
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator({
  Home: Home
});

const AuthStack = createStackNavigator({
  Login: Login,
  Register: Register
});

const MainContainer = createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      Auth: AuthStack,
      App: AppContainer
    },
    {
      initialRouteName: "App"
    }
  )
);

export default class App extends React.Component {
  state = {
    isLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "montserrat-regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
      "roboto-regular": require("./assets/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto_Condensed/RobotoCondensed-Bold.ttf"),
      "source-code-pro": require("./assets/fonts/Source_Code_Pro/SourceCodePro-Regular.ttf")
    });
    this.setState({ isLoaded: true });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "rgba(225,225,225, 0.3)" }}>
        <StatusBar barStyle="dark-content" />
        <MainContainer />
      </View>
    );
  }
}
