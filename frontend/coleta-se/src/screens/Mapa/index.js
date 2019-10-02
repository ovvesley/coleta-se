import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Permission } from "react-native";
export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -22.9035,
        longitude: -43.2096,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log("wokeeey");
        console.log(position);
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0100,
            longitudeDelta: 0.0100
          }
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
    });
    return (
      <MapView
        style={{ flex: 1 }}
        region={this.state.region}
        showsUserLocation
      />
    );
  }
}
