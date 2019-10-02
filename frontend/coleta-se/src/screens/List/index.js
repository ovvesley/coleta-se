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

  componentDidMount() {
    this.getSpots()
    .then(data => {
      //console.log(data);
      for (let i = 0; i < data.length; i++) {
        data[i]['key'] = i+'a';
      }
    
      this.setState({ spots: data, loading: false });  
    });
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.login}</Text>
    </View>
  );

  render() {

    const { spots, loading } = this.state;
    console.log(spots);


    return !loading ? (
        <View style={styles.container}>
          <FlatList
            style={styles.lista}
            contentContainerStyle={styles.container}
            data={spots}
            renderItem={ ({item}) => <Text style={styles.item}>{ item.login }</Text> }
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>No data</Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#8000FF',
  },

  item: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
    textAlign: "center",
    fontSize: 20,
  },

  lista: {
    marginTop: 0,
    padding: 0,
  },

});