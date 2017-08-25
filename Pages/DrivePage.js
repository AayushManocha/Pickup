import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class DrivePage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
    title: "Drive",
    tabBarIcon: ({focused, tintColor}) => (<Icon type="material-community" color={tintColor} size={25} name="steering"/>)
  }

  render() {
    return (
      <View>
        <Text>Drive Page</Text>
      </View>
    )
  }
}