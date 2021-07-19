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
  container: {
    flex: 1,
  },
});

export default register;
