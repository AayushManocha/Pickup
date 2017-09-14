//Importing relevant libraries
//Signup page for new users. Users are provided with a form to enter new account details consisting of an
//email and password, utilizing firebase for user and password authentication.
import React, { Component } from 'react'; 
import { Image, View, StyleSheet, Keyboard, Dimensions, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import ModalHeader from '../Components/Headers/ModalHeader'
import * as firebase from 'firebase';
import KeyboardSpacer from 'react-native-keyboard-spacer';

//Constructor to initialize state used for creating user details
export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      errorMessage: ""
    }
    this.signup = this.signup.bind(this);
  }

//Password and user authentication
  async signup() {
    Keyboard.dismiss();
    //If statement checking for user authentication
    if(this.state.password === this.state.passwordConfirm) { 
      try {
        //Verifying user email and password with firebase
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password); 
      } catch (error) {
        this.setState({errorMessage: error.toString()});
      }
      //If passwords don't match, returns error message
    } else {
      this.setState({errorMessage: "Passwords don't match"});
    }
  }

  static navigationOptions = {
    header: null
  }

//Account creation elements
  render() {
    return ( 
      <View>
        <ModalHeader navigation={this.props.navigation} title="Create Account" />
        <View style={styles.container}>
          <FormInput
          text={this.state.email}
          onChangeText={(email) => this.setState({email})}
          style={{marginTop: 30}}
          keyboardType='email-address'
          autoCapitalize="none"
          spellCheck={false}
          placeholder="E-mail Address" />

          <FormInput
          text={this.state.password}
          onChangeText={(password) => this.setState({password})}
          style={{marginTop: 30}}
          spellCheck={false}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Password" />

          <FormInput
          text={this.state.passwordConfirm}
          onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}
          style={{marginTop: 30}}
          spellCheck={false}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Confirm Password" />

          <Text>{this.state.errorMessage}</Text>

          <Button
          backgroundColor="#000"
          onPress={this.signup}
          style={{ marginTop: 30}}
          title="Create Account" />
          <KeyboardSpacer />
        </View>
      </View>
    );
  }
}

//JSX stylesheet for page
const styles = StyleSheet.create({
  container: {
    marginTop: 60
  },
  image: {
    flex: 0,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
})
