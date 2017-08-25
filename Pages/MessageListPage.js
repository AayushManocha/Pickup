import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MessageListPage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
    title: "Messages"
  }

  render() {
    return (
      <View>
        <Text>Message List</Text>
      </View>
    )
  }
}