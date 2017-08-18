import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class BasicHeader extends Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
      this.props.navigation.goBack();
    }

    render() {
        return(
            <Header
            onPress={this.closeModal}
            statusBarProps={{ backgroundColor: "black", barStyle: 'light-content' }}
            centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 18, fontWeight:'600' }}}
            rightComponent={
            <TouchableOpacity onPress={this.closeModal}>
              <Icon color="#fff" name="close" />
            </TouchableOpacity>}
            backgroundColor="#2c3e50"
            />
        );
    }
}
