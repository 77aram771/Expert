import React, {Component} from 'react';
import {StyleSheet, Image, Icon, View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

class Inputs extends Component {
    state = {
        name: ''
    };

    render() {
        let {name} = this.state;
        let {text, icon} = this.props;
        console.log('name', name);
        console.log('text', text);
        console.log('icon', icon);
        return (
            <View style={styles.container}>
                <View style={styles.SectionStyle}>
                    <Image
                        //source={require(`${icon}`)}
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={{flex: 1}}
                        placeholder={text}
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 85 + '%',
        marginTop: 50,
        marginBottom: 50,
        borderRadius: 3,
    },

    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 70,
        borderRadius: 5,
        margin: 10,
    },

    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});

export default Inputs;