import React, {Component} from 'react';
import {StyleSheet, Image, View, TextInput} from 'react-native';

class Inputs extends Component {
    render() {
        let {text, icon, change, value, style} = this.props;
        console.log(style)
        console.log(value)
        return (
            <View style={styles.container}>
                <View style={style ? styles.SectionStyleValT :  styles.SectionStyleValF}>
                    <Image
                        source={icon}
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={{flex: 1}}
                        placeholder={text}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => change(text)}
                        value={value}
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

    SectionStyleValF: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'red',
        height: 70,
        borderRadius: 5,
        margin: 10,
    },
    SectionStyleValT: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'green',
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