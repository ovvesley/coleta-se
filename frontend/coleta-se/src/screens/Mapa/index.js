import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FAB, Portal, Provider } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";
import FloatButtonGroup from "../../Components/GenericComponent/FloatButtonGroup";
import ModalSugestoes from "../../Components/GenericComponent/ModalSugestoes";
import ModalNovoLocal from "../../Components/GenericComponent/ModalNovoLocal";
import { Input, Button } from "react-native-elements";

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
      },
      modalNovoLocal: {
        visible: false
      },
      enableNovoLocal: false,
      novoLocal: {
        region: {},
        title: "",
        description: ""
      }
    };

    this.enableNovoLocal = this.enableNovoLocal.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelModalNovoLocal = this.cancelModalNovoLocal.bind(this);
  }

  handleTitle(title) {
    this.setState(state => ({
      novoLocal: { ...state.novoLocal, title: title }
    }));
  }

  handleDescription(description) {
    this.setState(state => ({
      novoLocal: { ...state.novoLocal, description }
    }));
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
  _showModalNovoLocal = () =>
    this.setState({ modalNovoLocal: { visible: true } });
  _hideModalNovoLocal = () =>
    this.setState({ modalNovoLocal: { visible: false } });

  enableNovoLocal() {
    this.setState(state => ({
      enableNovoLocal: !state.enableNovoLocal
    }));
  }

  addNovoLocal(e) {
    const { coordinate } = e.nativeEvent;
    this.setState({ novoLocal: { region: coordinate } });

    this._showModalNovoLocal();
  }

  setNovoLocal({ title, description }) {
    this.setState(state => ({
      novoLocal: {
        ...state.novoLocal,
        title,
        description
      }
    }));
  }

  handleSubmit() {
    this._hideModalNovoLocal();
    const novoLocal = this.state.novoLocal;
    console.log(novoLocal);
    this.setState({
      enableNovoLocal: false
    });
    this.props.postSpots({
      descricao: novoLocal.description,
      titulo: novoLocal.title,
      latitude: novoLocal.region.latitude,
      longitude: novoLocal.region.longitude
    });
  }

  cancelModalNovoLocal() {
    this._hideModalNovoLocal();

    this.setState({
      enableNovoLocal: false
    });
  }

  render() {
    const FloatButton = () => (
      <FAB
        style={styles.fab}
        icon="plus-one"
        onPress={() => console.log("Pressed")}
      />
    );
    return (
      <View style={{ flex: 1 }}>
        {this.state.enableNovoLocal && (
          <Text
            style={{
              textAlign: "center",
              backgroundColor: "green",
              marginTop: 4
            }}
          >
            Modo adicionar local
          </Text>
        )}

        <MapView
          style={{ width: "100%", height: "100%" }}
          region={this.state.region}
          showsUserLocation
          onPress={
            !this.state.enableNovoLocal ? null : e => this.addNovoLocal(e)
          }
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

          {this.state.enableNovoLocal &&
          this.state.novoLocal.region.hasOwnProperty("latitude") ? (
            <Marker
              coordinate={this.state.novoLocal.region}
              title={"Insira"}
              description={"..."}
              // onPress={() => this._showModalNovoLocal()}
            />
          ) : (
            <View></View>
          )}
        </MapView>
        <FloatButtonGroup
          enableNovoLocal={this.enableNovoLocal}
          showModal={this._showModal}
        />
        <ModalSugestoes
          visible={this.state.modal.visible}
          hideModal={this._hideModal}
        />
        {this.state.novoLocal.region.hasOwnProperty("latitude") && (
          <ModalNovoLocal
            visible={this.state.modalNovoLocal.visible}
            region={this.state.novoLocal.region}
            inputsValues={this.state.novoLocal}
            setNovoLocal={this.setNovoLocal}
            valueText={this.state.novoLocal}
            handleTitle={this.handleTitle}
            handleDescription={this.handleDescription}
            hideModal={this._hideModalNovoLocal}
            handleSubmit={this.handleSubmit}
            cancel={this.cancelModalNovoLocal}
          />
        )}
      </View>
    );
  }
}
