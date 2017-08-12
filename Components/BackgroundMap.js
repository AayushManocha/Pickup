import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { MapView, Location, Permissions } from 'expo';

export default class BackgroundMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    }
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  render() {
    if(typeof this.state.location === 'object' && this.state.location) {
      return (
        <MapView
        style={{flex: 1}}
        initialRegion={{
        latitude: this.state.location.coords.latitude,
        longitude: this.state.location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }} />
      );
    } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
      );
    }
  }

}

