import React, { Component } from "react";
import { FAB, Portal, Provider } from "react-native-paper";

export default class FloatButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <Provider>
        <Portal>
          <FAB.Group
            open={this.state.open}
            icon={this.state.open ? "add" : "add"}
            actions={[
              {
                icon: "add",
                label: "Adicione novos locais",
                onPress: () => this.props.enableNovoLocal()
              },
              {
                icon: "star",
                label: "Sobre nós",
                onPress: () => this.props.showModal()
              }
            ]}
            onStateChange={({ open }) => this.setState({ open })}
            onPress={() => {
              if (this.state.open) {
                console.log("FloatButton!");
              }
            }}
          />
        </Portal>
      </Provider>
    );
  }
}
