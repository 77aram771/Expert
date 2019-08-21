import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View, ScrollView, ImageBackground} from 'react-native';
import FooterButton from "../components/FooterButton";
import ProgressBar from "../components/ProgressBar";
import Buttons from "../components/Buttons";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';




const radio_props = [
    {label: 'param1', value: 0},
    {label: 'param2', value: 1}
];

const quizQuestions = [
    {
        id: 1,
        dataName: 'Do you already have a phone system',
        question: ['yes', 'no']
    },
    {
        id: 2,
        dataName: 'How many handsets do you need?',
        question: ['1 - 4', '5 - 24', '25 - 49', '50 - 99', '100 +']
    },
    {
        id: 3,
        dataName: 'What features do you require?',
        question: ['Audio/video conferencing', 'Cloud/hosted solution', 'Home/mobile worker', 'Call monitoring/recording', 'Call center software', 'Unsure please advise']
    },
    {
        id: 4,
        dataName: 'What do you need your phone system?',
        question: ['Within 1 mounts', 'Within 3 mounts', 'Within 12 mounts', 'In over 12 mounts']
    },
];

let sum = 0;

class PhonePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stat: [],
        }
    }

    handleClick = () => {

        sum ++;
        this.setState({
            value: sum
        }, () => console.log(this.state.value))
    }

    render() {
        console.log(sum);
        return (
            <View style={styles.Container}>
                <View style={styles.headerImage}>
                    <Image source={require('../assets/headerBack.png')} style={{width: 100 + '%', height: 60}}/>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textView1}>
                        Save by Comparing Phone
                        System Prices
                    </Text>
                    <Text style={styles.textView2}>
                        How it works? 1. Complete the form 2. Get matched
                        with suppliers 3. Save by comparing prices
                    </Text>
                    <ProgressBar/>
                </View>
                <View>

                    <Text>
                        {quizQuestions[sum].dataName}
                    </Text>

                    {
                        quizQuestions[sum].question.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text>
                                        {item}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
                <View>
                    {/*<RadioForm*/}
                    {/*    radio_props={radio_props}*/}
                    {/*    initial={0}*/}
                    {/*    onPress={(value) => {this.setState({value:value}, () => console.log(this.state.value))}}*/}
                    {/*/>*/}
                </View>
                <View>
                    <Buttons text='Compare Prices' Click={this.handleClick}/>
                </View>
                <FooterButton/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 100 + '%',
        height: 100 + '%',
        backgroundColor: '#fff',
    },
    headerImage: {
        width: 100 + '%',
        height: 110,
    },
    textView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 75 + '%',
    },
    textView1: {
        textAlign: 'left',
        color: "#5e5e61",
        fontFamily: "Open Sans",
        fontSize: 24,
        fontWeight: "700",
    },
    textView2: {
        marginBottom: 25,
        marginTop: 15,
        color: "#252525",
        fontFamily: "Open Sans",
        fontSize: 13,
        fontWeight: "400"
    },

});

export default PhonePage