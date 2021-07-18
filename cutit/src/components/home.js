import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  Header,
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
    <ScrollView style={styles.container}>
     

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

const styles = StyleSheet.create({
  padR: {
    padding: 10,
  },

  listTitle: {
    color: "#1970E6",
    fontSize: 20,
    marginLeft: 50,
  },

  switch: {
    marginRight: 50,
  },

  widthSet: {
    padding: 10,
  },

  iconImage: {
    width: 100,
    height: 100,
  },

  itemContainer: {
    alignItems: "center",
    padding: 10,
    margin: 10,
  },

  flexrow: {
    flexDirection: "row",
    padding: 10,
    marginRight: 10,
  },

  buttonContainerStyle: {
    borderRadius: 50,
  },

  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },

  headerStyle: {
    color: "#1970E6",
  },

  input: {
    height: 40,
    margin: 12,
  },

  widthSet: {
    padding: 10,
  },

  textView: {
    fontWeight: "bold",
    color: "#1970E6",
    textAlign: "center",
    fontSize: 16,
  },

  inputBlock: {
    width: "50%",
  },

  background: {
    backgroundColor: "#FFF",
    flex: 1,
  },

  headline_text: {
    color: "#1970E6",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  stylesItemLabel: {
    color: "#1970E6",
  },

  tileGrid: {
    color: "#1970E6",
  },
});

export default home;
