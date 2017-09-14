//import react dependencies
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class BasicHeader extends Component {
    constructor(props) {
        //initialize Component with properties
        super(props);
        //bind goBack() to prepare function
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
      //navigation to go back
      this.props.navigation.goBack();
    }

    render() {
        return(
            //goBack button on header with styles
            <Header
            onPress={this.goBack}
            statusBarProps={{ backgroundColor: "black", barStyle: 'light-content' }}
            centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 18, fontWeight:'600' }}}
            leftComponent={
            //on press styling
            <TouchableOpacity onPress={this.goBack}>
              <Icon color="#fff" name="arrow-back" />
            </TouchableOpacity>}
            backgroundColor="#2c3e50"
            />
        );
    }
}
