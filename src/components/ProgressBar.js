import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View, Button, ImageBackground} from 'react-native';

class ProgressBar extends Component {
    render() {
        return (
            <View style={styles.divProgress}>
                <View style={styles.inProgress} />
                <Text style={styles.textProgress}>
                    10 %
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    divProgress: {
        width: 100 + '%',
        height: 20,
        borderRadius: 15,
        backgroundColor: "#e8e8e8",
        position: 'relative'
    },
    inProgress: {
        width: 10 + '%',
        height: 20,
        borderRadius: 15,
        backgroundColor: "#1cb09a",
    },
    textProgress: {
        position: 'absolute',
        top: 0,
        left: 50 + '%',
        textAlign: 'center',
        color: "#606060",
        fontFamily: "Proxima Nova",
        fontSize: 11,
        fontWeight: "400",
        lineHeight: 20,
    }
});

export default ProgressBar;