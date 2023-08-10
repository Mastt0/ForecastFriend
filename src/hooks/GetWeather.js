import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const GetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData(
        location.coords.latitude,
        location.coords.longitude
      );
    })();
  }, []);

  return [loading, error, weather];
};

// import React, { useState, useEffect } from "react";
// import * as Location from "expo-location";
// import { WEATHER_API_KEY } from "@env";

// export const GetWeather = () => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [weather, setWeather] = useState([]);
//   const [lat, setLat] = useState([]);
//   const [lon, setLon] = useState([]);

//   const fetchWeatherData = async () => {
//     try {
//       const res = await fetch(
//         `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
//       );
//       const data = await res.json();
//       setWeather(data);
//     } catch (err) {
//       setError("could not fetch weather");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();

//       if (status !== "granted") {
//         setError("permission to access location was denied");
//         return;
//       }
//       let location = await Location.getCurrentPositionAsync({});
//       setLat(location.coords.latitude);
//       setLon(location.coords.longitude);
//       await fetchWeatherData();
//     })();
//   }, [lat, lon]);
//   return [loading, error, weather];
// };
