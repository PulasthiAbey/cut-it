import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import styleItem from '../styles/styles';

const image = require('../assets/images/barber.jpg');

const register = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
    </View>
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
    backgroundColor: "#000000c0"
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

  cutit: {
    fontFamily: "VeganStylePersonalUse-5Y58",
  }
})

 export default register;