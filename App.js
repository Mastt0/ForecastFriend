import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "./src/screens/CurrentWeather";
import FutureWeather from "./src/screens/FutureWeather";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CurrentWeather" component={CurrentWeather} />
        <Tab.Screen name="FutureWeather" component={FutureWeather} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
