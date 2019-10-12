import React, { Component } from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import {Card} from "react-native-elements";

export default class ModalForm extends Component {
  render() {
    return (
      <Provider>
        <Portal>
          <Modal visible={this.props.visible} onDismiss={this.props.hideModal}>
            <Card title={"Novo Local"}></Card>
          </Modal>
        </Portal>
      </Provider>
    );
  }
}
