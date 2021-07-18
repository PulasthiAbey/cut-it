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

const home = ({ navigation }) => {
  // declaring the grid view of the segment

  return (
    <ScrollView>
     <ImageBackground source={require('./src/assets/images/barber.jpg')} resizeMode="cover" style={styles.image}>

      <View style={styles.widthSet} />

      {/* // body starts here */}
      

      {/* submit button  */}

      <View style={styles.buttonContainerStyle}>
        {/* <Button
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("suggestions")}
          title="Checkout Suggestions"
        /> */}
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default home;
