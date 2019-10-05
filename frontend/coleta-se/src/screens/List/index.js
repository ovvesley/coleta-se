import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { styles } from "./styles";

export default function List({ spots }) {

  return spots && spots.length > 0 ? (
    <View>
      <FlatList 
        data={spots}
        renderItem={({ item }) => (
          <Card 
            style={styles.card} 
            title={item.titulo}>
            <Text>
              {item.descricao}
            </Text>
          </Card>
        )}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Text>No data</Text>
    </View>
  );
}
