//import react and expo dependencies
import React, { Component } from 'react'
import { View, ScrollView, Text, Platform } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class MapsAutocomplete extends Component {
  constructor(props) {
    //initialize Component with properties
    super(props);
    //bind predictions and results functions
    this.getPredictions = this.getPredictions.bind(this);
    this.renderResults = this.renderResults.bind(this);
    //set state to result
    this.state = {
      results: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    //pass props to setState() and getPredictions()
    this.setState({results: [],})
    this.getPredictions(nextProps.input);
  }

  getPredictions(input) {
  //getPredictions(input,location) {
  // ^^ new function name to pass in location
    //temp location of McMaster
    var location = 43.2605739,-79.9304626
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
  }

  renderResults() {
    //show results from API with map
    return this.state.results.map((result, index) => (
      <ListItem
        key={index}
        title={result}
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
