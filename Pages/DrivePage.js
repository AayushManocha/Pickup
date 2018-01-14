//Importing relevant libraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Icon, Button} from 'react-native-elements'
import MapsAutocomplete from '../Components/MapsAutocomplete';
import * as firebase from 'firebase';

// Export class for use in other files
export default class DrivePage extends Component {
  // Implementing constructor for component subclass
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.postTrip = this.postTrip.bind(this);
    
    this.state = {
      startingPoint: "",
      destinationPoint:"",
      startingIsActive: true,
      startingPointSet: false,
      destinationPointSet: false,
      location: null,
    }
  }

//Customizing screen design and features in the navigator
  static navigationOptions = {
    header: null,
    title: "Drive",
    tabBarIcon: ({focused, tintColor}) => (<Icon type="material-community" color={tintColor} size={25} name="steering"/>)
  }

  handler(text) {
    if(this.state.startingIsActive) {
        this.setState({startingPoint: text, startingPointSet: true});
    } else {
        this.setState({destinationPoint: text, destinationPointSet: true});
    }
}

  postTrip() {
    //Add Trip Node
    var newTrip = firebase.database().ref().child("trips").push({
      startingPoint: this.state.startingPoint,
      destinationPoint: this.state.destinationPoint,
      driverId: firebase.auth().currentUser.uid,
    });
  
    //Create Corresponding Chat Node
    firebase.database().ref().child("chats/" + newTrip.key).update({
      numOfMembers: 1,
      messageIndex: 0,
      members: {
        1: firebase.auth().currentUser.uid,
      }
    })
  }
 
  //Autocomplete functionality for when searching input start and destination points
  renderAutocomplete() {
    if(!this.state.startingPointSet || !this.state.destinationPointSet) {
        if(this.state.startingIsActive) {
            return <MapsAutocomplete handler={this.handler} input={this.state.startingPoint}/>
        } else {
            return <MapsAutocomplete handler={this.handler} input={this.state.destinationPoint}/>
        }
    } else {
        return <Button onPress={this.postTrip} title="Post Trip"/>
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
          style={styles.forms}
          placeholder="Starting Point"
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
