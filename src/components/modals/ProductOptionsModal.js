import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Modal } from "./Modal";
import colors from "../../utils/colors";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "../common/TouchableOpacity";

const sizes = [5, 5.5, 6, 6.5, 7, 8, 8.5, 9];
const _colors = ["white", "black", "maroon", "pink", "mauve", "blue", "orange"];

class ProductOptionsModal extends Component {
  state = {
    sizeSelected: false,
    colorSelected: false
  };

  selectSize = () => {
    this.setState({ sizeSelected: !this.state.sizeSelected });
  };
  render() {
    const { isVisible, actionOpenClose, children } = this.props;
    return (
      <Modal
        style={styles.container}
        isVisible={isVisible}
        actionOpenClose={actionOpenClose}
      >
        <View style={styles.containerModal}>
          <Text style={styles.title}>Product options</Text>

          <ScrollView>
            <View style={styles.mainPickerContainer}>
              <Text style={styles.optionTitle}>Select size</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 13 }}
              >
                {sizes.map(size => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.pickerContainer,
                        {
                          backgroundColor: this.state.sizeSelected
                            ? colors.primary1
                            : null
                        }
                      ]}
                      onPress={this.selectSize}
                    >
                      <Text
                        style={[
                          styles.pickerText,
                          {
                            color: this.state.sizeSelected
                              ? colors.primary2
                              : null
                          }
                        ]}
                      >
                        {size}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            <View style={{ marginTop: 12 }}>
              <Text style={styles.optionTitle}>Select color</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 13 }}
              >
                {_colors.map(color => {
                  return (
                    <TouchableOpacity
                      style={[
                        styles.pickerContainer,
                        {
                          backgroundColor: this.state.colorSelected
                            ? colors.primary1
                            : null,
                          paddingHorizontal: 20,
                          width: null,
                          height: 40
                        }
                      ]}
                      onPress={this.selectcolor}
                    >
                      <Text
                        style={[
                          styles.pickerText,
                          {
                            color: this.state.colorSelected
                              ? colors.primary2
                              : null
                          }
                        ]}
                      >
                        {color}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  }
}
export default ProductOptionsModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    margin: 0
  },
  containerModal: {
    backgroundColor: "white",
    borderRadius: 12,
    height: "45%",
    paddingHorizontal: 12
  },
  title: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 12
  },
  optionTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: colors.primary1,
    marginTop: 15,
    textDecorationColor: colors.primary1,
    textDecorationLine: "underline"
  },
  pickerContainer: {
    height: 49,
    width: 49,
    borderRadius: 15,
    borderColor: colors.primary1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13
  },
  pickerText: {
    color: colors.primary1,
    fontWeight: "500"
  }
});
