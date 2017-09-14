//Importing relevant libraries
//Profile and settings page for users to customize their accounts
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

//Account screen navigation settings
  static navigationOptions = {
    header: null,
    title: "Profile",
    tabBarIcon: ({focused, tintColor}) => (<Icon type="material-community" color={tintColor} size={25} name="account"/>)
  }

  render() {
    return (
      <View>
        <Text>Profile Page</Text>
      </View>
    )
  }
}