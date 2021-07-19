import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";

import styleItem from "../styles/styles";
import HeaderItem from "../utils/head";

const { width } = Dimensions.get("screen");

const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH * 0.9;

const register = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <HeaderItem />
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    opacity: 1,
  },

  container: {
    flex: 1,
  },

  mainContent: {
    alignItems: "center",
    backgroundColor: "#000000c0",
  },

  textItem: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },

  subTextItem: {
    color: "white",
    fontSize: 21,
    lineHeight: 42,
    fontWeight: "bold",
    textAlign: "center",
  },

  
});

export default register;
