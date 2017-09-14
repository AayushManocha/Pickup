//import react dependencies
import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

export default class BasicHeader extends Component {
    constructor(props) {
        //initialize Component with properties
        super(props);
        //bind closeModal() to prepare function
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
      //close modal for iOS and go back
      this.props.navigation.goBack();
    }

    render() {
        return(
            //goBack button on header with styles
            <Header
            onPress={this.closeModal}
            statusBarProps={{ backgroundColor: "black", barStyle: 'light-content' }}
            centerComponent={{ text: this.props.title, style: { color: '#fff', fontSize: 18, fontWeight:'600' }}}
            rightComponent={
            //on press styling
            <TouchableOpacity onPress={this.closeModal}>
              <Icon color="#fff" name="close" />
            </TouchableOpacity>}
            backgroundColor="#2c3e50"
            />
        );
    }
}
