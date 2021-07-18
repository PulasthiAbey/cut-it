import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Header, Icon } from "react-native-elements";

const head = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      {/* header segment started */}
      <Header
        statusBarProps={{ barStyle: "light-content" }}
        barStyle="light-content" // or directly
        leftComponent={
          <Icon
            name="navicon"
            type="font-awesome"
            color="#1970E6"
            onPress={() => {
              alert("Item Clicked");
            }}
          />
        }
        rightComponent={
          <Icon
            name="bell"
            type="font-awesome"
            color="#1970E6"
            onPress={() => {
              alert("Item Clicked");
            }}
          />
        }
        containerStyle={{
          backgroundColor: "#FFF",
          justifyContent: "space-around",
        }}
      />
      {/* // header segment ended here  */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default head;
