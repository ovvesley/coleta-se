import React, { Component } from "react";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { Input, Icon,  Card  } from "react-native-elements";
import { Text, View, Image } from "react-native";
import { styles } from "./modal-style";

export default class ModalNovoLocal extends Component {
  render() {
    return (
      <Provider>
        <Portal>
          <Modal visible={this.props.visible}>
            <Card containerStyle={{ borderRadius: 20 }} title={"Informações"}>
              <View style={styles.body}>
                <Text>
                {this.props.region.latitude + " " + this.props.region.longitude}

                </Text>
              </View>
            </Card>
          </Modal>
        </Portal>
      </Provider>
    );
  }
}
