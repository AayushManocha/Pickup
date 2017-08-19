import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StackHeader from '../Components/Headers/StackHeader';

export default class FindRidePage extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      header: null
    }

    render() {
        return (
            <View>
                <StackHeader navigation={this.props.navigation} title="Find a Pickup" />
                <View style={styles.container}>
                    <Text>Body</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
    },
});
