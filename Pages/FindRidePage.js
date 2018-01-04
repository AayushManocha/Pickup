//Implementing relevant libraries
//Find a ride page. This page allows users to find a ride and connect with drivers by inputing their starting point
//and destination, with autocomplete input functionality.
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';
import StackHeader from '../Components/Headers/StackHeader';
import MapsAutocomplete from '../Components/MapsAutocomplete';

//Constructor to initialize state used to input start and end destination points
export default class FindRidePage extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            startingPoint: "",
            destinationPoint:"",
            startingIsActive: true,
            startingPointSet: false,
            destinationPointSet: false,
            location: null,
        }
    }

//Configuration for find a ride navigarion tool
    static navigationOptions = {
      header: null,
      title: 'Find a Ride',
      tabBarIcon: ({focused, tintColor}) => (<Icon type="material-community" color={tintColor} size={25} name="car"/>)
    }

//Handle Autocomplete List Clicks
    handler(text) {
        if(this.state.startingIsActive) {
            this.setState({startingPoint: text, startingPointSet: true});
        } else {
            this.setState({destinationPoint: text, destinationPointSet: true});
        }
    }

//Autocomplete functionality for when searching input start and destination points
    renderAutocomplete() {
        if(!this.state.startingPointSet || !this.state.destinationPointSet)
        if(this.state.startingIsActive) {
            return <MapsAutocomplete handler={this.handler} input={this.state.startingPoint}/>
        } else {
            return <MapsAutocomplete handler={this.handler} input={this.state.destinationPoint}/>
        }
    }

//Returns page element containing start and destination entries
    render() {
      let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
        return (
            <View style={styles.container}>
                <TextInput
                placeholder="Starting Point"
                style={styles.forms}
                value={this.state.startingPoint}
                onFocus={() => this.setState({startingIsActive: true})}
                onChangeText={(startingPoint) => this.setState({startingPoint})}/>

                <TextInput
                placeholder="Destination"
                style={styles.forms}
                value={this.state.destinationPoint}                
                onFocus={() => this.setState({startingIsActive: false})}
                onChangeText={(destinationPoint) => this.setState({destinationPoint})}/>
                {this.renderAutocomplete()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    forms: {
        margin: 5,
        height: 40,
        borderColor: '#FFF',
        borderWidth: 1,
        backgroundColor:"#FFF",
    }
});
