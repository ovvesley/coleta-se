import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles"; 

export default function List({ spots }) {
  return spots && spots.length > 0 ? (
    <View style={styles.container}>
      <FlatList
        style={styles.lista}
        contentContainerStyle={styles.container}
        data={spots}
        renderItem={({ item }) => <Text style={styles.item}>{item.login}</Text>}
      />
    </View>
  ) : (
      <View style={styles.container}>
        <Text>No data</Text>
      </View>
  );
}