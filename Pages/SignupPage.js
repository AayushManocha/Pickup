import React, { Component } from 'react';
import { Image, View, StyleSheet, Keyboard, Dimensions, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import ModalHeader from '../Components/Headers/ModalHeader'
import * as firebase from 'firebase';
import KeyboardSpacer from 'react-native-keyboard-spacer';

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

  static navigationOptions = {
    header: null
  }

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
          onPress={this.signup}
          style={{ marginTop: 30}} 
          title="Create Account" />
          {/* <KeyboardSpacer /> */}
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