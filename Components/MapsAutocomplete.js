//import react and expo dependencies
import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Text, Platform } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';



export default class MapsAutocomplete extends React.Component {
  constructor(props) {
    //initialize Component with properties
    super(props);
    //bind predictions and results functions
    this.getPredictions = this.getPredictions.bind(this);
    this.renderResults = this.renderResults.bind(this);
    //set state to result
    this.state = {
      results: [],
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


  componentWillReceiveProps(nextProps) {
    //pass props to setState() and getPredictions()
    this.setState({results: [],})
    this.getPredictions(nextProps.input);
  }


  getPredictions(input) {
    if(typeof this.state.location === 'object' && this.state.location) {
      var longitude = this.state.location.coords.longitude
      var latitude = this.state.location.coords.latitude
      var long = longitude.toString();
      var lat = latitude.toString();
      //location specified as lat,long
      var location = lat.concat(',',long);


      //API request to google maps with search, location, radius, and language
      var requestString = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&location=${location}&radius=500&language=en&key=AIzaSyC55oFnJQXfvv-3t-UCeKtmuc7_a2ejgsU`;
      fetch(requestString)
      .then((results) => results.json())
      .then((results) => {
        //calculate length of predictions
        for(var i = 0; i < results.predictions.length; i++) {
          this.setState((prevState) => {
            results: prevState.results.push(results.predictions[i].description);
          })
        }
        this.forceUpdate();
      });
    }else {
    return (
      //loading message to display while location loads
      <View>
        <Text>Loading...</Text>
      </View>
      );
    }
  }

  renderResults() {
    //show results from API with map
    return this.state.results.map((result, index) => (
      <ListItem
        key={index}
        title={result}
        onPress={() => this.props.handler(result)}
      />
    ))
  }

  render() {
    //if results exist show results in ScrollView
    if(this.state.results.length != 0) {
      return (
        <ScrollView overScrollMode="always">
          <List containerStyle={{marginBottom: 20}}>
            {this.renderResults()}
          </List>
        </ScrollView>
      );
    } else {
      return null;
    }
  }
}
