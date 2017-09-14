import React, { Component } from 'react'; //Importing relevant libraries
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = { //Account screen navigation settings
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