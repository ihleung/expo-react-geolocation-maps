import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";

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
//hello
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
    /*<View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsUserLocation={true}
        followUserLocation={true}
      />
    </View>
    */
    //working with Markers and maps
    /*
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsUserLocation
        followUserLocation
        showsPointsOfInterest={false}
      >
        <Marker
          title="Seneca College Newnham Campus"
          description="Educational Institute"
          coordinate={{ latitude: 43.79457, longitude: -79.35043 }}
        />
      </MapView>
    </View>
    */
    //Working with Polygon on mapview
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        showsUserLocation
        followUserLocation
        showsPointsOfInterest={false}
      >
        <Polygon
          coordinates={[
            { latitude: 43.79701, longitude: -79.35178 },
            { latitude: 43.79849, longitude: -79.3453 },
            { latitude: 43.79483, longitude: -79.34612 },
            { latitude: 43.79382, longitude: -79.35049 },
          ]}
          strokeWidth={3}
          strokeColor="red"
        />
      </MapView>
    </View>
  );
}
