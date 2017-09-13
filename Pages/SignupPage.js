import React, { Component } from 'react'; //Importing relevant libraries
import { Image, View, StyleSheet, Keyboard, Dimensions, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import ModalHeader from '../Components/Headers/ModalHeader'
import * as firebase from 'firebase';
import KeyboardSpacer from 'react-native-keyboard-spacer';

export default class SignupPage extends Component {
  constructor(props) { //Constructor to initialize state used for creating user details
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      errorMessage: ""
    }
    this.signup = this.signup.bind(this);
  }

  async signup() { //Password and user authentication
    Keyboard.dismiss();
    if(this.state.password === this.state.passwordConfirm) { //If statement checking for user authentication
      try {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password); //Verifying user email and password with firebase
      } catch (error) {
        this.setState({errorMessage: error.toString()});
      }
    } else {
      this.setState({errorMessage: "Passwords don't match"}); //if passwords don't match, returns error message
    }
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return ( //Account creation elements
      <View>
        <ModalHeader navigation={this.props.navigation} title="Create Account" /> //Email input form
        <View style={styles.container}>
          <FormInput
          text={this.state.email}
          onChangeText={(email) => this.setState({email})}
          style={{marginTop: 30}}
          keyboardType='email-address'
          autoCapitalize="none"
          spellCheck={false}
          placeholder="E-mail Address" />

          <FormInput //
          text={this.state.password} //Password input form
          onChangeText={(password) => this.setState({password})}
          style={{marginTop: 30}}
          spellCheck={false}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Password" />

          <FormInput
          text={this.state.passwordConfirm} //Password verification
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
          title="Create Account" /> //Confirmation button for users to create account and submit forms
          <KeyboardSpacer />
        </View>
      </View>
    );
  }
}

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
