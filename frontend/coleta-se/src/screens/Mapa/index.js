import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
import FloatButtonGroup from "../../Components/GenericComponent/FloatButtonGroup";
import ModalForm from "../../Components/GenericComponent/ModalForm";

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
      markers: [],
      modal: {
        visible: false
      }
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
    this.setState({ markers: this.props.spots });
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  _showModal = () => this.setState({ modal: { visible: true } });
  _hideModal = () => this.setState({ modal: { visible: false } });

  render() {
    const FloatButton = () => (
      <FAB
        style={styles.fab}
        icon="plus-one"
        onPress={() => console.log("Pressed")}
      />
    );
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{width:'100%', height:'100%'}}
          region={this.state.region}
          showsUserLocation
        >
          {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.coordinate}
              title={marker.title}
              description={marker.description}
              key={marker.id}
            >
              <Image
                source={require("../../../assets/carro_de_lixo.png")}
                style={{ width: 40, height: 40 }}
              />
            </Marker>
          ))}
        </MapView >

        <FloatButtonGroup showModal={this._showModal} />
        <ModalForm visible={this.state.modal.visible} hideModal={this._hideModal}/>
      </View>
    );
  }
}
