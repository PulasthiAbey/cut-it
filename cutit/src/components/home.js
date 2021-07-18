import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground } from "react-native";
import {
  Image,
  Button,
  Input,
  Icon,
  ListItem,
  Switch,
  TouchableOpacity,
} from "react-native-elements";

import HeaderItem from '../utils/head';
import styleItem from '../styles/styles';

const image = {};

const home = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
    image: {
    flex: 1,
    justifyContent: "center"
  },

  container: {
    flex: 1,
  },
});

export default home;
