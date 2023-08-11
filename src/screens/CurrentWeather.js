import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GetWeather } from "../hooks/GetWeather";

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "cyan",
  },
});

const CurrentWeather = () => {
  const [loading, error, weather] = GetWeather();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <React.Fragment>
      <View style={styles.container1}>
        <Text>Weather Condition: {weather.current.condition.text}</Text>
      </View>
      <View style={styles.container2}>
        <Text>Temperature: {weather.current.temp_f} °F</Text>
      </View>
    </React.Fragment>
  );
};

export default CurrentWeather;
