import React, {Component} from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import BackgroundMap from '../Components/BackgroundMap';
import { MapView } from 'expo';

export default class HomePage extends Component {
  static navigationOptions = {
    title: "Pickup",
    headerLeft: null,
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <BackgroundMap /> 
        <Button style={styles.findRideButton} title="Find Ride!" />
        <Button style={styles.messagesButton} title="Messages" />     
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  findRideButton: {
    position: 'absolute',
    bottom: 400,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  messagesButton: {
    alignSelf: 'stretch'
  }
})
