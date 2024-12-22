import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  Share,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Colors from "../../constants/Colors";
import { Button } from "@rneui/themed";
import * as Location from 'expo-location';
import Ionicons from "@expo/vector-icons/Ionicons";

const MapScreen = (props: any) => {
  const initialLocation = props.route.params?.initialLocation;
  const readonly = props.route.params?.readonly;

  const [selectedLocation, setSelectedLocation] = useState(initialLocation);

  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const getPermissionAsync = async () => {
    const status= await Location.requestForegroundPermissionsAsync();
     console.log(status);

      if (status.status !== 'granted') {
        Alert.alert(
          'Insufficient permissions!',
          'You need to grant camera permissions to use this app.',
          [{ text: 'Okay' }]
        );
        return false;
      }
      return true;
    }



  const getLocationHandler = async () => {
    await props.navigation.setOptions({

      headerTitle: "Map",

      headerRight: () => (
          <TouchableOpacity
              style={styles.headerButton}
          >
            <Button
                onPress={onShare}
                title="Share"
                icon={
                  <Ionicons name="share-outline" size={20} color="black" />
                }
                iconContainerStyle={{ marginRight: 50 }}
                titleStyle={{ fontFamily: "Roboto-bold", marginLeft: 10 }}
                buttonStyle={{
                  backgroundColor: "blue",
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 10,
                }}
                containerStyle={{
                  width: 80,
                }}
            />
          </TouchableOpacity>
      ),


    });
    const hasPermission = await getPermissionAsync();
    if (!hasPermission) {
      return;
    }

    try {
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });

      setSelectedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
      props.onLocationPicked({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } catch (err) {
      Alert.alert(
        'Could not fetch location!',
        'Please try again later or pick a location on the map.',
        [{ text: 'Okay' }]
      );
    }

  };


  const selectLocationHandler = (event: any) => {
    if (readonly) {
      return;
    }
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "QuickAid  | Location share",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error:any) {
      Alert.alert(error.message);
    }
  };


  useEffect(() => {
    getLocationHandler();

  }, []);

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates} />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Colors.primary,
  },
});

export default MapScreen;
