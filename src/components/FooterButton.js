import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View, Button, ImageBackground, TouchableOpacity, Alert} from 'react-native';

class FooterButton extends Component {

    showAlert = () =>{
        Alert.alert(
            'Not ready'
        )
    };

    render() {
        return(
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.kkkkkkk} onPress={() => this.showAlert()}>
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
        shadowColor: "green",
        shadowOffset: {
            width: 5,
            height: 12,
        },
        shadowOpacity: 0.4,
        // shadowRadius: 16.00,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'red',
        marginBottom: '5%'
    },
    kkkkkkk: {
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white',
        height: 50,
        minHeight: 50,
        width: 100,
        maxWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#0080ff',
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 8,
        shadowRadius: 1,
        shadowOpacity: 0.8,
    },
    buttonText: {
        color: "#b8b8b8",
        fontFamily: "Open Sans",
        fontSize: 22,
        fontWeight: "700"
    }
});

export default FooterButton;