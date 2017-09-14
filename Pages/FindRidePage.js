import React, { Component } from 'react'; //Implementing relevant libraries
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';
import StackHeader from '../Components/Headers/StackHeader';
import MapsAutocomplete from '../Components/MapsAutocomplete';

export default class FindRidePage extends Component {
    constructor(props) { //Constructor to initialize state used to input start and end destination points
        super(props);
        this.state = {
            startingPoint: "",
            destinationPoint:"",
            startingIsActive: true,
        }
    }

    static navigationOptions = { //Configuration for find a ride navigarion tool
      header: null,
      title: 'Find a Ride',
      tabBarIcon: ({focused, tintColor}) => (<Icon type="material-community" color={tintColor} size={25} name="car"/>)
    }

    renderAutocomplete() { //Autocomplete functionality for when searching input start and destination points
        if(this.state.startingIsActive) {
            return <MapsAutocomplete input={this.state.startingPoint}/>
        } else {
            return <MapsAutocomplete input={this.state.destinationPoint}/>
        }
    }

    render() { //Returns page element containing start and destination entries
        return (
            <View style={styles.container}>
                <TextInput //Input for starting point
                placeholder="Starting Point"
                style={styles.forms}
                onFocus={() => this.state.startingIsActive = true}
                onChangeText={(startingPoint) => this.setState({startingPoint})}/>

                <TextInput 
                placeholder="Destination"
                style={styles.forms}
                onFocus={() => this.state.startingIsActive = false}
                onChangeText={(destinationPoint) => this.setState({destinationPoint})}/> //Input for destination point
                
                {this.renderAutocomplete()}
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
