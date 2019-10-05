import React from "react";
import { View, Text, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { styles } from "./styles";

export default function List({ spots }) {
  return spots && spots.length > 0 ? (
    <View style={styles.viewWithData}>
      <FlatList 
        data={spots}
        renderItem={({ item }) => (
          <Card title={item.title}>
            <Text>
              {item.description}
            </Text>
          </Card>
        )}
      />
    </View>
  ) : (
    <View style={styles.viewWithNoData}>
      <Text>No data</Text>
    </View>
  );
}
