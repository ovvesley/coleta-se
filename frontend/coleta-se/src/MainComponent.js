import React, { Component } from "react";
import { BottomNavigation, Text, ActivityIndicator } from "react-native-paper";
import { View } from "react-native";

import url from "./shared/baseUrl";
import Info from "./screens/Info";
import List from "./screens/List";
import Mapa from "./screens/Mapa";
import baseUrl from "./shared/baseUrl";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "mapa", title: "Mapa", icon: "map" },
        { key: "list", title: "Lista", icon: "list" },
        { key: "info", title: "Info", icon: "info" }
      ],
      spots: []
    };
  }

  componentDidMount() {
    this.getSpots().then(data => {
      for (let i = 0; i < data.length; i++) {
        data[i]["key"] = i + "a";
      }
      data = data.map(val => {
        val.coordinate.latitude = parseFloat(val.coordinate.latitude);
        val.coordinate.longitude = parseFloat(val.coordinate.longitude);
        return val;
      });
      this.setState({ spots: data });
    });
  }

  _handleIndexChange = index => this.setState({ index });
  _renderScene = BottomNavigation.SceneMap({
    mapa: () => <Mapa spots={this.state.spots} postSpots={this.postSpots} />,
    list: () => <List spots={this.state.spots} />,
    info: Info
  });

  async getSpots() {
    try {
      const spotsApi = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credetials: "same-origin"
      });
      return await spotsApi.json();
    } catch (error) {
      console.log(error);
    }
  }

  postSpots(data){
  const formData  = new FormData();
  for(let name in data) {
    formData.append(name, data[name]);
  }
  fetch(baseUrl + 'validaDados.php', {
    method: 'POST',
    body: formData
  });
  console.log(formData)
  }

  render() {
    return this.state.spots[0] ? (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        barStyle={{ backgroundColor: "#f2f2f2" }}
        activeColor="#8c655d"
      />
    ) : (
      <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#8c655d" />
      </View>
    );
  }
}
