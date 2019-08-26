import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';


class Buttons extends Component {
    render() {
        const {text, Click, color, width, colorText, borderCol} = this.props;
        const num = parseInt(width)
        const styles = StyleSheet.create({
            button: {
                width: num,
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