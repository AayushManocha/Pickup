import React, {Component} from 'react';
import { Image, View, StyleSheet, Keyboard, Dimensions, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import BasicHeader from '../Components/Headers/BasicHeader';
import KeyboardSpacer from 'react-native-keyboard-spacer';
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
    this.checkAuthStatus = this.checkAuthStatus.bind(this);
    this.checkAuthStatus();
  }

  async login() {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      console.log("Logged In!");
      this.props.navigation.navigate("HomePage");
    } catch (error) {
      this.setState({errorMessage: error.toString()});
    }
  }

  checkAuthStatus() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.props.navigation.navigate("HomePage");
      }
    });
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return(
      <View>
        <BasicHeader title="Login" />
        <View style={styles.container}>
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
          backgroundColor="#000"
          onPress={this.login}
          style={{ marginTop: 30}}
          title="Login" />

          <Button
          backgroundColor="#000"
          onPress={() => this.props.navigation.navigate("SignupPage")}
          style={{ marginTop: 30}}
          title="Create Account" />

          <KeyboardSpacer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
  image: {
    flex: 0,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
})
