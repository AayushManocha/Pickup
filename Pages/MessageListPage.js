//Importing relevant libraries
//This page provides a list of messages received by the logged in user.
import React, { Component } from 'react'; 
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class MessageListPage extends Component {
  constructor(props) {
    super(props);
  }

//Messages screen navigation settings
  static navigationOptions = {
    header: null,
    title: "Messages",
    tabBarIcon: ({focused, tintColor}) => (<Icon type="material-community" color={tintColor} size={25} name="message-reply-text"/>)
  }

  render() {
    return (
      <View>
        <Text>Message List</Text>
      </View>
    )
  }
}