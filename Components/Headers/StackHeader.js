import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class BasicHeader extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
      this.props.navigation.goBack();
    }

    render() {
        return(
            <Header
            onPress={this.goBack}
            statusBarProps={{ backgroundColor: "black", barStyle: 'light-content' }}
            centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 18, fontWeight:'600' }}}
            leftComponent={
            <TouchableOpacity onPress={this.goBack}>
              <Icon color="#fff" name="arrow-back" />
            </TouchableOpacity>}
            backgroundColor="#2c3e50"
            />
        );
    }
}
