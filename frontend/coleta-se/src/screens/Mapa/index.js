import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -22.9035,
        longitude: -43.2096,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: [
        {
          coordinate: { latitude: -22.905, longitude: -43.2096 },
          description: "Lixeira de Teste",
          title: "Lixeira boladona",
          id: 1
        },
        {
          coordinate: { latitude: -22.800, longitude: -43.2096 },
          description: "Lixeira de Teste",
          title: "Lixeira boladona",
          id: 2
        },
        {
          coordinate: { latitude: -22.600, longitude: -43.2096 },
          description: "Lixeira de Teste",
          title: "Lixeira boladona",
          id: 3
        },
        {
          coordinate: { latitude: -22.700, longitude: -43.2096 },
          description: "Lixeira de Teste",
          title: "Lixeira boladona",
          id: 4
        }
      ]
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
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
      <MapView style={{ flex: 1 }} region={this.state.region} showsUserLocation>
        {this.state.markers.map(marker => (
          <Marker
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.title}
            key={marker.id}
          >
            <Image
              source={require("../../../assets/carro_de_lixo.png")}
              style={{ width: 40, height: 40 }}
            />
          </Marker>
        ))}
      </MapView>
    );
  }
}
