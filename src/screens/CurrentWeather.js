import React from "react";
import { View, Text } from "react-native";

const CurrentWeather = () => {
  return (
    <React.Fragment>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey",
        }}
      >
        <Text>Weather Condition is Rainy</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "cyan",
        }}
      >
        <Text>Temperature: 68</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey",
        }}
      >
        <Text>High: 75</Text>
        <Text>Low: 67</Text>
      </View>
    </React.Fragment>
  );
};

export default CurrentWeather;
