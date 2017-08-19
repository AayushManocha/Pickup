import React, { Component } from 'react'
import { View, ScrollView, Text, Platform } from 'react-native';
import { Location, Permissions } from 'expo';

export default class MapsAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.getPredictions = this.getPredictions.bind(this);
    this.state = {
      results: [],
    }
    this.getPredictions();
  }

  getPredictions() {
    var requestString = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=648%20Caldwell&types=geocode&language=en&key=AIzaSyC55oFnJQXfvv-3t-UCeKtmuc7_a2ejgsU`;
    fetch(requestString)
    .then((results) => results.json())
    .then((results) => {
      for(var i = 0; i < results.predictions.length; i++) {
        this.setState((prevState) => {
          results: prevState.results.push(results.predictions[i].description);
        })
      }
      console.log(this.state.results);
    });
  }

  render() {
    return (
      <View>
        <Text> Maps Autocomplete </Text>
      </View>
    );
  }
}