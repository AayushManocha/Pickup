import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FormInput } from 'react-native-elements';
import StackHeader from '../Components/Headers/StackHeader';
import MapsAutocomplete from '../Components/MapsAutocomplete';

export default class FindRidePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startingPoint: "",
            destinationPoint:"",
            startingIsActive: true,
        }
    }

    static navigationOptions = {
      header: null
    }

    renderAutocomplete() {
        if(this.state.startingIsActive) {
            return <MapsAutocomplete input={this.state.startingPoint}/>
        } else {
            return <MapsAutocomplete input={this.state.destinationPoint}/>
        }
    }

    render() {
        return (
            <View>
                <StackHeader navigation={this.props.navigation} title="Find a Pickup" />
                <View style={styles.container}>
                    <TextInput 
                    placeholder="Starting Point"
                    style={styles.forms}
                    onFocus={() => this.state.startingIsActive = true}
                    onChangeText={(startingPoint) => this.setState({startingPoint})}/>

                    <TextInput 
                    placeholder="Destination"
                    style={styles.forms}
                    onFocus={() => this.state.startingIsActive = false}
                    onChangeText={(destinationPoint) => this.setState({destinationPoint})}/>
                    
                    {this.renderAutocomplete()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
    },
    forms: {
        margin: 5,
        height: 40,
        borderColor: '#FFF',
        borderWidth: 1,
        backgroundColor:"#FFF",
    }
});
