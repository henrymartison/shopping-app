import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { TouchableOpacity } from "./TouchableOpacity";

const Button = ({
  children,
  transparent = false,
  style,
  bgColor = colors.primary1,
  onPress
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        backgroundColor: transparent ? "transparent" : bgColor
      },
      style
    ]}
  >
    {children}
  </TouchableOpacity>
);
export default Button;

const styles = StyleSheet.create({
  container: {}
});
