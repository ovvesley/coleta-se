import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Linking } from "expo";

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: 45,
      },
      textTitle :{
        fontSize : 20,
        textAlign: "center",
        fontWeight: "bold",
      },
      subTitle:{
        fontSize: 15,
        textAlign: "center",
        fontStyle: 'italic',
      },
      body:{
        paddingHorizontal: 20,
        marginTop: 15,
      },
      textBody: {
        textAlign: "center",
        fontSize: 15,
      }

    });
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Informações</Text>
        <Text style={styles.subTitle}>Saiba mais sobre o coleta-se</Text>
        <View style={styles.body}>
          <Text style={styles.textBody}> O coleta-se é um app que busca ajudar aqueles que procuram descartar o lixo da maneira ecológicamente correta.</Text>
          <Text style={styles.textBody}> Dividido em telas, proporcionamos ao usuário um mapa com os principais pontos para a coleta de lixo ecológico e uma lista planificada desses tais pontos.</Text>
        </View>
      </View>
    );
  }
}
