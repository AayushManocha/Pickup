import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@shoutem/ui';

import SignupPage from './Pages/SignupPage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignupPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
