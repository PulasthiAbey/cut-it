import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import HomeScreen from "./src/components/set_location";
// import Suggestions from "./src/components/suggestions";
// import Map from "./src/components/mapItem";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="suggestions" component={Suggestions} />
        <Stack.Screen name="map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
