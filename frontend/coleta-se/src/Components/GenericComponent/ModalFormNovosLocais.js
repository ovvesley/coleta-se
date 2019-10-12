import React, { Component } from "react";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { Input, Icon,  Card  } from "react-native-elements";
import {Text} from "react-native";

export default class ModalForm extends Component {
  render() {
    return (
      <Provider>
        <Portal>
          <Modal visible={this.props.visible} onDismiss={this.props.hideModal}>
            <Card title={"Novo Local"}>
              <Text>
                Novo Local: novo local é uma forma de você ajudar a gente com
                locais que você conhece. Sua ajuda é sempre bem vinda. :)
              </Text>

              <Input placeholder="Cidade" />
              <Input placeholder="Nome do Centro" />
              <Button>Submit</Button>
            </Card>
          </Modal>
        </Portal>
      </Provider>
    );
  }
}
