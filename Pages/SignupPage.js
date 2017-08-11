import React, { Component } from 'react';
import { Image, View, StyleSheet, Keyboard, Dimensions, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBaWYZ94G8h071WIUiTz4C-2EVok8iZX-s",
    authDomain: "pickup-4de9f.firebaseapp.com",
    databaseURL: "https://pickup-4de9f.firebaseio.com",
    projectId: "pickup-4de9f",
    storageBucket: "pickup-4de9f.appspot.com",
    messagingSenderId: "184041685269"
};

firebase.initializeApp(config);

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

  async signup() {
    Keyboard.dismiss();
    if(this.state.password === this.state.passwordConfirm) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      } catch (error) {
        this.setState({errorMessage: error.toString()});
      }
    } else {
      this.setState({errorMessage: "Passwords don't match"});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', flex: 1, marginTop: 30}}>
          <Image style={styles.image} source={require('../assets/logo-circle.png')} />
        </View>

        <FormInput text={this.state.email} 
        onChangeText={(email) => this.setState({email})} 
        style={{marginTop: 30}} 
        keyboardType='email-address'
        autoCapitalize="none"
        placeholder="E-mail Address" />

        <FormInput text={this.state.email} 
        onChangeText={(password) => this.setState({password})} 
        style={{marginTop: 30}} 
        autoCapitalize="none"
        secureTextEntry
        placeholder="Password" />

        <FormInput text={this.state.email} 
        onChangeText={(passwordConfirm) => this.setState({passwordConfirm})} 
        style={{marginTop: 30}} 
        autoCapitalize="none"
        secureTextEntry
        placeholder="Confirm Password" />

        <Text>{this.state.errorMessage}</Text>

        <Button 
        onPress={this.signup}
        style={{ marginTop: 30}} 
        title="Create Account" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    aspectRatio: 1
  }, 
  image: {
    flex: 1,
    flexDirection: 'column',
    width: 150,
    height: 150,
    resizeMode: 'contain',
  }
})