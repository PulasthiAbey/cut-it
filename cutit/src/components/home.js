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

const home = ({ navigation }) => {
  // declaring the grid view of the segment

  return (
    <ScrollView style={styles.container}>
      {/* header segment started */}
     <HeaderItem/>
      {/* // header segment ended here  */}

      <View style={styles.widthSet} />

      {/* // body starts here */}
      <Input
        style={styles.input}
        placeholder="Set Your Location"
        leftIcon={
          <Icon name="location-arrow" type="font-awesome" color="#1970E6" />
        }
      />
      <View style={styles.widthSet} />

      {/* segment inputs */}
      <Text style={styles.textView}>Your Free Time Slot</Text>
      <Input style={styles.inputBlock} placeholder="From" />
      <Input style={styles.inputBlock} placeholder="To" />

      <View style={styles.widthSet} />

      {/* Preferences */}
      <View style={styles.background}>
        <Text style={styles.headline_text}>Select Your Preferences</Text>

        <View style={styles.widthSet} />
        {/* Basic Usage */}

        <ListItem
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>Bars</ListItem.Title>
          </ListItem.Content>
          <View style={styles.switch}>
            <Switch value={true} />
          </View>
        </ListItem>

        <ListItem
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>Hotels</ListItem.Title>
          </ListItem.Content>
          <View style={styles.switch}>
            <Switch value={true} />
          </View>
        </ListItem>

        <ListItem
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>Beaches</ListItem.Title>
          </ListItem.Content>
          <View style={styles.switch}>
            <Switch value={true} />
          </View>
        </ListItem>

        <ListItem
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>Activities</ListItem.Title>
          </ListItem.Content>
          <View style={styles.switch}>
            <Switch value={true} />
          </View>
        </ListItem>

        <ListItem
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <ListItem.Content>
            <ListItem.Title style={styles.listTitle}>Clubs</ListItem.Title>
          </ListItem.Content>
          <View style={styles.switch}>
            <Switch value={true} />
          </View>
        </ListItem>
      </View>

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
