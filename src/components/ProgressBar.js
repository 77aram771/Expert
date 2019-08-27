import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, Button, ImageBackground} from 'react-native';

class ProgressBar extends Component {
    render() {
        const {progress} = this.props;
        const styles = StyleSheet.create({
            divProgress: {
                width: 85 + '%',
                height: 11,
                borderRadius: 5,
                backgroundColor: "#e8e8e8",
                position: 'relative',

            },
            inProgress: {
                width: progress + '%',
                height: 11,
                borderRadius: 5,
                backgroundColor: "#1cb09a",
            },
            textProgress: {
                position: 'absolute',
                top: 0,
                left: 43 + '%',
                textAlign: 'center',
                color: "#606060",
                fontFamily: "Proxima Nova",
                fontSize: 8,
                fontWeight: "400",
            }
        });
        return (
            <View style={styles.divProgress}>
                <View style={styles.inProgress} />
                <Text style={styles.textProgress}>
                    progress {progress} %
                </Text>
            </View>
        );
    }
}


export default ProgressBar;