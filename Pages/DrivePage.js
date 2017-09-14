//Importing relevant libraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

// Export class for use in other files
export default class DrivePage extends Component {
  // Implementing constructor for component subclass
  constructor(props) {
    super(props);
  }

//Customizing screen design and features in the navigator
  static navigationOptions = {
    header: null,
    title: "Drive",
    tabBarIcon: ({focused, tintColor}) => (<Icon type="material-community" color={tintColor} size={25} name="steering"/>)
  }

 //Returns page element
  render() {
    return (
      <View>
        <Text>Drive Page</Text>
      </View>
    )
  }
}