import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export default function List({ spots }) {

  function onPress(item) {
    console.log(item);
  }



  return spots && spots.length > 0 ? (
    <View style={styles.container}>
      <FlatList
        style={styles.lista}
        contentContainerStyle={styles.container}
        data={spots}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => onPress(item)}>
            <Text>{item.login}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Text>No data</Text>
    </View>
  );
}
