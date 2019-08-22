import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View, Button, ImageBackground, TouchableOpacity, Alert} from 'react-native';

class FooterButton extends Component {

    showAlert = () => {
        Alert.alert(
            'Not ready'
        )
    };

    render() {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.showAlert()}>
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
    },
    buttonStyle: {
        width: 48 + '%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#52ff00",
        shadowOffset: {
            width: 20,
            height: 70,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1.00,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    buttonText: {
        color: "#b8b8b8",
        fontFamily: "Open Sans",
        fontSize: 22,
        fontWeight: "700"
    }
});

export default FooterButton;