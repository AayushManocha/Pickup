import React, { Component } from 'react'
import { View, ScrollView, Text, Platform } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class MapsAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.getPredictions = this.getPredictions.bind(this);
    this.renderResults = this.renderResults.bind(this);
    this.state = {
      results: [],
    }
  }

  componentWillReceiveProps() {
    console.log("Getting new props");
    this.setState({
      results: [],
    })
    this.getPredictions();
  }

  getPredictions() {
    var requestString = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.props.input}&types=geocode&language=en&key=AIzaSyC55oFnJQXfvv-3t-UCeKtmuc7_a2ejgsU`;
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
    if(this.state.results != []) {
      return (
        <List containerStyle={{marginBottom: 20}}>
          {this.renderResults()}
        </List>
      );
    } else {
      return null;
    }  
  }
}