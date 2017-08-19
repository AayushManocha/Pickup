import React, { Component } from 'react';
import { Text } from 'react-native';

export default class FindRidePage extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
      header: null
    }

    render() {
        return (
            <Text> Find Ride </Text>
        );
    }
}
