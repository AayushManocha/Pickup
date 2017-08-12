import React, {Component} from 'react';
import { Header } from 'react-native-elements';

export default class BasicHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Header
            statusBarProps={{ backgroundColor: "black", barStyle: 'light-content' }}
            centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 18 } }}
            backgroundColor="#000"
            />
        );
    }
}
