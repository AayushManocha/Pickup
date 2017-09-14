//import react dependencies
import React, {Component} from 'react';
import { Header } from 'react-native-elements';


export default class BasicHeader extends Component {
    constructor(props) {
        //initialize Component with properties
        super(props);
    }

    render() {
        return(
            //goBack button on header with styles
            <Header
            statusBarProps={{ backgroundColor: "black", barStyle: 'light-content' }}
            centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 18, fontWeight: '600' } }}
            backgroundColor="#2c3e50"
            />
        );
    }
}
