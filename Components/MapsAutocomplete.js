import React, { Component } from 'react'
import { View, ScrollView, Text, Platform } from 'react-native';
import { List, ListItem } from 'react-native-elements';
//import statements

export default class MapsAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.getPredictions = this.getPredictions.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.state = {
      results: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({results: [],})
    this.getPredictions(nextProps.input);
  }

  getPredictions(input) {
    var requestString = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&language=en&key=AIzaSyC55oFnJQXfvv-3t-UCeKtmuc7_a2ejgsU`;
    fetch(requestString)
    .then((results) => results.json())
    .then((results) => {
      for(var i = 0; i < results.predictions.length; i++) {
        this.setState((prevState) => {
          results: prevState.results.push(results.predictions[i].description);
        })
      }
      this.forceUpdate();
    });
  }

  renderResults() {
    return this.state.results.map((result, index) => (
      <ListItem
        key={index}
        title={result}
      />
    ))
  }

  render() {
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
