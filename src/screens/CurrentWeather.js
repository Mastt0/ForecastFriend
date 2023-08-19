import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GetWeather } from "../hooks/GetWeather";

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
  },
});

const CurrentWeather = () => {
  const [loading, error, weather] = GetWeather();
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container1}>
      <Text> {currentDate}</Text>
      <Text>Weather Condition: {weather.current.condition.text}</Text>
      <Text>Temperature: {weather.current.temp_f} °F</Text>
      <Text>Feels Like: {weather.current.feelslike_f}% </Text>
      <Text>Humidity: {weather.current.humidity}% </Text>
      <Text>Cloud Coverage: {weather.current.cloud}% </Text>
      <Text>Wind Speed: {weather.current.wind_mph} mph </Text>
      <Text>Gust Speed: {weather.current.gust_mph} mph </Text>
    </View>
  );
};

export default CurrentWeather;
