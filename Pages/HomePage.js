import React, {Component} from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import BackgroundMap from '../Components/BackgroundMap';
import { MapView } from 'expo';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.findRidesPressed = this.findRidesPressed.bind(this);
    }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <BackgroundMap />
        <Button backgroundColor='#FFF'
        onPress={this.findRidesPressed}
        color='#676767'
        style={styles.findRideButton}
        title="Where are you going?"
        raised
        large/>

        <Button large
        backgroundColor='#2c3e50'
        style={styles.messagesButton}
        title="Messages"
        iconRight
        icon={{name: 'arrow-upward'}}/>
      </View>
    );
  }

  findRidesPressed() {
      this.props.navigation.navigate("FindRidePage");
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  findRideButton: {
    position: 'absolute',
    bottom: 400,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.8
  },
  messagesButton: {
     position: 'absolute',
     alignSelf: 'center',
     bottom: 0,
     width: Dimensions.get('window').width,
  }
})
