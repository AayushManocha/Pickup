import React, { Component } from 'react'; //Importing relevant libraries
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class DrivePage extends Component { // Export class for use in other files
  constructor(props) { // Implementing constructor for component subclass
    super(props);
  }

  static navigationOptions = { //Customizing screen design and features in the navigator
    header: null,
    title: "Drive",
    tabBarIcon: ({focused, tintColor}) => (<Icon type="material-community" color={tintColor} size={25} name="steering"/>)
  }

  render() { //Returns page element
    return (
      <View>
        <Text>Drive Page</Text>
      </View>
    )
  }
}