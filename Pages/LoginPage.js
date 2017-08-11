import React, {Component} from 'react';
import { Image, View, StyleSheet, Keyboard, Dimensions, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import * as firebase from 'firebase';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    }
    this.login = this.login.bind(this);
  }

  async login() {

    try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        console.log("Logged In!");
        // Navigate to the Home page
    } catch (error) {
        this.setState({errorMessage: error.toString()});
    }

}

  render() {
    return(
      <View style={styles.container}>
        <View style={{alignItems: 'center', flex: 1, marginTop: 30}}>
          <Image style={styles.image} source={require('../assets/logo-circle.png')} />
        </View>

        <FormInput text={this.state.email} 
        onChangeText={(email) => this.setState({email})} 
        style={{marginTop: 30}} 
        keyboardType='email-address'
        spellCheck={false}
        autoCapitalize="none"
        spellCheck={false}
        placeholder="E-mail Address" />

        <FormInput text={this.state.password} 
        onChangeText={(password) => this.setState({password})} 
        style={{marginTop: 30}} 
        autoCapitalize="none"
        secureTextEntry
        placeholder="Password" />

        <Text>{this.state.errorMessage}</Text>

        <Button 
        onPress={this.login}
        style={{ marginTop: 30}} 
        title="Login" />

        <Button
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