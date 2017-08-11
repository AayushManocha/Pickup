import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { configureFirebase } from './config/FirebaseSetup';

import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    configureFirebase();
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
