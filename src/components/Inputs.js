import React, {Component} from 'react';
import {StyleSheet, Image, Icon, View, Text, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

class Inputs extends Component {
    state = {
        name: ''
    };

    render() {
        let {name} = this.state;
        let {text, icon, change} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.SectionStyle}>
                    <Image
                        source={icon}
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={{flex: 1}}
                        placeholder={text}
                        underlineColorAndroid="transparent"
                        onChange={() => console.log('asd')}
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
        marginRight: 7,
        marginTop: 18,
        marginLeft: 18,
        marginBottom: 18,
        resizeMode: 'stretch',
    },
});

export default Inputs;