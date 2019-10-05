import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card } from "react-native-elements";

import { styles } from "./styles";



export default function Info() {
  return (
    <ScrollView style={styles.container}>
      <Card title="Como posso descartar isso?">
        <Image
          source={require("../../../assets/pilha.png")}
          style={{ width: 30, height: 50 }}
        />
        <Text style={styles.textBody}>
          Para fazer o descarte de pilhas e baterias é necessário, antes de
          tudo, armazenar as pilhas e/ou apenas embalá-las em plástico
          resistente para evitar contato com umidade a fim de evitar
          vazamentos.
        </Text>
      </Card>
      <Card containerStyle={{ borderRadius: 20 }} title={"Informações"}>
        <Text style={styles.textTitle}></Text>
        <Text style={styles.subTitle}>Saiba mais sobre o coleta-se</Text>
        <View style={styles.body}>
          <Image
            source={require("../../../assets/carro_de_lixo.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.textBody}>
            O coleta-se é um app que busca ajudar aqueles que procuram
            descartar o lixo da maneira ecológicamente correta.
          </Text>

          <Text style={styles.textBody}>
            Dividido em telas, proporcionamos ao usuário um mapa com os
            principais pontos para a coleta de lixo ecológico e uma lista
            planificada desses tais pontos.
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
}
