import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View,  TouchableOpacity} from 'react-native';


class Buttons extends Component {
    render() {
        const {text, Click} = this.props;
        return (
            <TouchableOpacity style={styles.button} onPress={Click}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width: 188,
        height: 53,
        borderRadius: 10,
        backgroundColor: "#fa715e",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: "#ffffff",
        fontFamily: "Open Sans",
        fontSize: 20,
        fontWeight: "700",
        lineHeight: 20,
    }
});

export default Buttons;