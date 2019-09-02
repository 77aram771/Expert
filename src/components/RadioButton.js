import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class RadioButtons extends Component {
    state = {
        value: null,
    };

    render() {
        const {options, nextQuez, stat} = this.props;
        const {value} = this.state;
        return (
            <View style={{width: 100 + '%', alignItems: 'center', justifyContent: 'center'}}>
                {options.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={styles.buttonContainer} onPress={() => {
                            this.setState({
                                value: index,
                            });
                            setTimeout(() => {
                                this.setState({
                                    value: null,
                                });
                            });
                            nextQuez();
                            stat(index);
                        }}>
                            <View
                                style={styles.circle}
                            >
                                {value === index ? <View style={styles.checkedCircle}/> :
                                    <View style={styles.checkedCircleGrey}/>}
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
        width: 77 + '%',
        height: 36,
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "#d3f2ff",
        backgroundColor: '#ffffff',
        shadowColor: "#d3f2ff",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 5,
    },
    circle: {
        width: 22,
        height: 22,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 7,

    },

    checkedCircle: {
        width: 14,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#4bb5ea',
    },

    checkedCircleGrey: {
        width: 14,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#f4f4f4',
    },
});