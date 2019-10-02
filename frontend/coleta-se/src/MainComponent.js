import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";
import Info from "./screens/Info";
import List from "./screens/List";
import Mapa from "./screens/Mapa";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "mapa", title: "Mapa", icon: "map" },
        { key: "list", title: "Lista", icon: "list" },
        { key: "info", title: "Info", icon: "info" }
      ]
    };
  }
  _handleIndexChange = index => this.setState({ index });
  _renderScene = BottomNavigation.SceneMap({
    mapa: Mapa,
    list: List,
    info: Info
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
