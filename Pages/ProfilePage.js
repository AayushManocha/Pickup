import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
    title: "Profile"
  }

  render() {
    return (
      <View>
        <Text>Profile Page</Text>
      </View>
    )
  }
}