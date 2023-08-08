import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrentWeather from "../screens/CurrentWeather";
import FutureWeather from "../screens/FutureWeather";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CurrentWeather" component={CurrentWeather} />
        <Tab.Screen name="FutureWeather" component={FutureWeather} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
