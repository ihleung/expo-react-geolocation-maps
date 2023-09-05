import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

export default function App() {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    // Accepts the current latitude and longitude
    // and updates the state variables
    function setPosition({ coords: { latitude, longitude } }) {
      setLongitude(longitude);
      setLatitude(latitude);
    }

    // Use navigator to get access to the devices' GPS
    navigator.geolocation.getCurrentPosition(setPosition);

    // Update the coordinates as the device is moved
    let watcher = navigator.geolocation.watchPosition(
      setPosition,
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );

    // When the component is unmounted, clear the watcher
    // since it is no longer necessary to track location
    return () => {
      navigator.geolocation.clearWatch(watcher);
    };
  });

  return (
    <View>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
  );
}
