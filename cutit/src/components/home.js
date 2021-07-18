import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
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
     <Image source={require('../assets/images/barber.jpg')}/>

      <View style={styles.widthSet} />

      {/* // body starts here */}
      

      {/* submit button  */}

      <View style={styles.buttonContainerStyle}>
        <Button
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("suggestions")}
          title="Checkout Suggestions"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default home;
