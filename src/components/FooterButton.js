import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View, Button, ImageBackground, TouchableOpacity, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

class FooterButton extends Component {

    showAlert = () => {
        Alert.alert(
            'Not ready'
        )
    };

    render() {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => Actions.Home()}>
                    <Text style={styles.buttonText}>
                        DEALS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.showAlert()}>
                    <Text style={styles.buttonText}>
                        YOUR QUOTES
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        //marginBottom: 100
    },
    buttonStyle: {
        width: 49 + '%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "#53a5c7",
        backgroundColor: '#ffffff',
        shadowColor: "#53a5c7",
        shadowOffset: {
            width: 0,
            height: 80,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    buttonText: {
        color: "#b8b8b8",
        fontFamily: "Open Sans",
        fontSize: 22,
        fontWeight: "700"
    }
});

export default FooterButton;