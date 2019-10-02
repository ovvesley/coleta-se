import React,{Component} from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/MainComponent";
export default class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return <Main />;
  }
}
