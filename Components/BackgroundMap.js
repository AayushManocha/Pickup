//import react and expo dependencies
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { MapView, Location, Permissions } from 'expo';

export default class BackgroundMap extends React.Component {
  constructor(props) {
    //initialize Component with properties
    super(props);
    //set state to location
    this.state = {
      location: ""
    }
  }

  componentWillMount() {
    //function to check if running in an emulator get location
    if (Platform.OS === 'android' && !Constants.isDevice) {
      //show error message
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      //else run _getLocationAsync
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    //check location permissions are enabled
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      //if not enabled show error message
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    //set location
    this.setState({ location });
  };
  render() {
    //render map view with current location centered
    if(typeof this.state.location === 'object' && this.state.location) {
      return (
        <MapView
        style={{flex: 1}}
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        initialRegion={{
        latitude: this.state.location.coords.latitude,
        longitude: this.state.location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }} />
      );
    } else {
    return (
      //loading message to display while location loads
      <View>
        <Text>Loading...</Text>
      </View>
      );
    }
  }

}
//map styling
const mapStyle = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];
