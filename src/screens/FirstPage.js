import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Button, Title, CardItem} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {StyleSheet, Image} from 'react-native';


class FirstPage extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Image
                        source={require('../assets/logo.png')}/>
                </Content>
                <Content padder>
                    <Button style={styles.buttonRegisterNow}
                            onPress={() => {
                                Actions.LogIn();
                            }}>
                        <Text style={styles.buttonRegisterNowText}>Register now</Text>
                    </Button>
                    <Button style={styles.buttonRegisterLater}
                            onPress={() => {
                                Actions.Register();
                            }}>
                        <Text>Register later</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: 'yellow',
        borderWidth: 1
    },
    buttonRegisterNow: {
        width: 311,
        height: 44,
        borderRadius: 100,
        backgroundColor: '#00b111'
    },
    buttonRegisterNowText: {
        color: "#ffffff",
        fontFamily: "Dosis",
        fontSize: 18,
        fontWeight: "500"
    },
    buttonRegisterLater: {
        width: 311,
        height: 44,
        borderStyle: 'solid',
        borderColor: '#00b111',
        borderWidth: 1,
        borderRadius: 100,
        backgroundColor: '#fff'
    }
});

export default FirstPage;
