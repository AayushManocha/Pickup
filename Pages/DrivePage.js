import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DrivePage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
    title: "Drive"
  }

  render() {
    return (
      <View>
        <Text>Drive Page</Text>
      </View>
    )
  }
}