import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Button, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View} from 'react-native';

class Home extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.headerImage}>
                    <Image source={require('../assets/HeaderBackground.png')} style={{width: 100 + '%', height: 110}}/>
                </View>
                <View style={{borderWidth: 1,
                    borderColor: 'red',
                    borderStyle: 'solid',}}>
                    <Text style={styles.textStyle}>
                        Start Saving {"\n"} Today!
                    </Text>
                    <Text style={styles.textStyle2}>
                        Get the best deal today
                    </Text>
                </View>
                <View style={{borderWidth: 1,
                    borderColor: 'red',
                    borderStyle: 'solid',}}>
                    <View>

                    </View>
                    <View>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 100 + '%',
        height: 100 + '%',
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
        backgroundColor: '#fff'
    },
    headerImage: {
        width: 100 + '%',
        height: 110,
        borderWidth: 1,
        borderColor: 'yellow',
        borderStyle: 'solid',

    },
    textStyle: {
        color: "#53a5c7",
        textAlign: 'center',
        fontFamily: "Open Sans",
        fontSize: 45,
        fontWeight: "700",
        lineHeight: 60,
    },
    textStyle2: {
        color: "#252525",
        textAlign: 'center',
        fontFamily: "Open Sans",
        fontSize: 14,
        fontWeight: "700",
    },

});

export default Home;