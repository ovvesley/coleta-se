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
      ],
      spots: [],
    };
  }

  componentDidMount() {
    this.getSpots().then(data => {
      //console.log(data);
      for (let i = 0; i < data.length; i++) {
        data[i]['key'] = i+'a';
      }
    
      this.setState({ spots: data });  
    });
  }


  _handleIndexChange = index => this.setState({ index });
  _renderScene = BottomNavigation.SceneMap({
    mapa: () => <Mapa spots={this.state.spots} />,
    list: () => <List spots={this.state.spots} />,
    info: Info
  });

  async getSpots() {
    try {
      const spotsApi = await fetch('https://api.github.com/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credetials: "same-origin"
      });
      return await spotsApi.json();
    } catch (error) {
      console.log(error);
    }
  }

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
