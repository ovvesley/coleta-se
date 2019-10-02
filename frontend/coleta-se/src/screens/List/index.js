import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      loading: true
    };
  }

  async getSpots() {
    try {
      const spotsApi = await fetch('https://localhost:1234/src/main.php');
      const spot = await spotsApi.json();
      this.setState({ spots: spot.results, loading: false});
      alert(spot.results);
    } catch (error) {
      console.log(error);
    }
  }

  renderItem(data) {
    return (
      <Text>{data.name, data.age}</Text>
    );
  }

  render() {
    
    const { spots, loading } = this.state;
    
    if (!loading) {
      return (
        <View style={styles.container}>
          <FlatList
            data={spots}
            renderItem={this.renderItem}
            onEndReached={this.getSpots}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>No data</Text>
        </View>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
