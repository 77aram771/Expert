import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import FooterButton from "../components/FooterButton";

class PreviewPage extends Component {
    render(){
        return(
            <View>
                <Text>PreviewPage</Text>
                <FooterButton/>
            </View>
        )
    }
}

export default PreviewPage;