import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class RadioButtons extends Component {
    state = {
        value: null,
    };

    render() {
        const {options} = this.props;
        const {value} = this.state;
        console.log('options', options);
        return (
            <View>
                {options.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.buttonContainer} onPress={() => {
                            this.setState({
                                value: index,
                            });
                        }}>
                            <View
                                style={styles.circle}
                            >
                                {value === index && <View style={styles.checkedCircle}/>}
                            </View>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        width: 321,
        height: 36,
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#bfdcff',
        backgroundColor: '#ffffff',
    },

    circle: {
        width: 22,
        height: 22,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },

    checkedCircle: {
        width: 14,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#4bb5ea',
    },
});