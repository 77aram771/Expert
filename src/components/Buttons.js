import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View,  TouchableOpacity} from 'react-native';


class Buttons extends Component {
    render() {
        const {text, Click, color, width, textNext, colorText, borderCol} = this.props;
        const styles = StyleSheet.create({
            button: {
                width: 100,
                height: 53,
                borderRadius: 10,
                backgroundColor: color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: borderCol,
                borderStyle: 'solid'
            },
            buttonText: {
                color: colorText,
                fontFamily: "Open Sans",
                fontSize: 20,
                fontWeight: "700",
                lineHeight: 20,
            }
        });
        return (
            <TouchableOpacity style={styles.button} onPress={Click}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </TouchableOpacity>
        )
    }
}



export default Buttons;