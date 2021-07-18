import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";

import styleItem from '../styles/styles';

const image = require('../assets/images/barber.jpg');

const home = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.mainContent}>
                <Text style={styles.textItem}>
                    Hello!
                </Text>
                <Text style={styles.subTextItem}>
                    Welcome to 
                    <Text style={styles.cutit}> CUTIT</Text>
                </Text>
            </View>
            <View style={styleItem.setWidth}/>
            <View style={styleItem.setWidth}/>
            <View style={styleItem.setWidth}/>
            <View style={styleItem.setWidth}/>
            <View>
                <TouchableOpacity
                   style={styleItem.buttonStyle}
                   onPress={() => {alert("Clicked")}} 
                >
                    <Text 
                    style={styleItem.buttonText}                   
                    >Let's Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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

});

export default home;
