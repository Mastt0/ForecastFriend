import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { GetWeather } from "../hooks/GetWeather";

const FutureWeather = () => {
  const [loading, error, weather] = GetWeather();
  const [futureForecast, setFutureForecast] = useState([]);

  useEffect(() => {
    if (weather && weather.forecast && weather.forecast.forecastday) {
      // Extract the next 3 days' forecast data
      const nextThreeDays = weather.forecast.forecastday.slice(1, 4);
      setFutureForecast(nextThreeDays);
    }
  }, [weather]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      {futureForecast.map((day) => (
        <View key={day.date}>
          <Text>Date: {day.date}</Text>
          <Text>Condition: {day.day.condition.text}</Text>
          <Text>High: {day.day.maxtemp_f}</Text>
          <Text>Low: {day.day.mintemp_f}</Text>
          <Text>Chance of Rain: {day.day.chance_of_rain} %</Text>
          <Text>Humidity: {day.day.avghumidity} %</Text>
        </View>
      ))}
    </View>
  );
};

export default FutureWeather;
