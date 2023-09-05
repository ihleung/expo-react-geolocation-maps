import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "ghostwhite",
  },

  mapView: {
    alignSelf: "stretch",
    height: "100%",
  },
});

export default function App() {
  //Requesting user location
  /*
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
*/
  return (
    //request user location
    /*
    <View>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
    */
    //displays map
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsUserLocation={true}
        followUserLocation={true}
      />
    </View>
  );
}
