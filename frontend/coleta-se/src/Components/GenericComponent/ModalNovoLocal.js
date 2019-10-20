import React, { Component } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { Input, Icon, Card, Button } from "react-native-elements";
import { Text, View, Image, TextInput } from "react-native";
import { styles } from "./modal-style";

export default class ModalNovoLocal extends Component {
  render() {
    return (
      <Provider>
        <Portal>
          <Modal visible={this.props.visible}>
            <Card containerStyle={{ borderRadius: 20 }} title={"Informações"}>
              <View style={styles.body}>
                <TextInput value={this.props.region.latitude.toString()} />
                <TextInput value={this.props.region.longitude.toString()} />
                <TextInput
                  onChangeText={this.props.handleTitle}
                  placeholder="Entre com um Titulo"
                  value={this.props.inputsValues.title}
                />
                <TextInput
                  onChangeText={this.props.handleDescription}
                  placeholder="Entre com um Descrição"
                  value={this.props.inputsValues.description}
                />

                <Button
                  title={"Compartilhar Local!"}
                  onPress={() => this.props.handleSubmit()}
                />
                 <Button
                  title={"Cancelar"}
                  onPress={this.props.cancel}
                />
              </View>
            </Card>
          </Modal>
        </Portal>
      </Provider>
    );
  }
}
