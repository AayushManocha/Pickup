import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { configureFirebase } from './config/FirebaseSetup';
import { Root } from './config/Router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    configureFirebase();
  }

  render() {
    return (
      <View style={styles.container}>
        <Root onNavigationStateChange={null}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
