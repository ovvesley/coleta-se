import React, { Component } from "react";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { Input, Icon,  Card  } from "react-native-elements";
import { Text, View, Image } from "react-native";
import { styles } from "./modal-style";

export default class ModalSugestoes extends Component {
  render() {
    return (
      <Provider>
        <Portal>
          <Modal visible={this.props.visible} onDismiss={this.props.hideModal}>
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
                  descartar o lixo da maneira ecologicamente correta.
                </Text>
      
                <Text style={styles.textBody}>
                  Dividido em telas, proporcionamos ao usuário um mapa com os
                  principais pontos para a coleta de lixo ecológico e uma lista
                  planificada desses tais pontos.
                </Text>
              </View>
            </Card>
          </Modal>
        </Portal>
      </Provider>
    );
  }
}
