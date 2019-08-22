import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Title, CardItem} from 'native-base';
import {StyleSheet, Image, View, ScrollView, ImageBackground, Dimensions} from 'react-native';
import FooterButton from "../components/FooterButton";
import ProgressBar from "../components/ProgressBar";
import Buttons from "../components/Buttons";
import RadioButton from "../components/RadioButton";

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
let num = 1;
class PhonePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stat: [],
        }
    }

    handleClickPlus = () => {
        if (sum < 3) {
            console.log(sum);
            sum++;
            num = 1 + sum
        }

        this.setState({
            value: sum
        })
    };

    handleClickMinus = () => {
        sum--;
        num = 1 + sum;
        this.setState({
            value: sum
        })
    };

    render() {

        console.log('quizQuestions.length', quizQuestions.length);
        console.log('sum', sum);

        return (

            <View style={styles.Container}>
                <View style={styles.headerImage}>
                    <View style={styles.imageView}>
                        <Image source={require('../assets/headerBack.png')} style={{width: 100 + '%', height: 60}}/>
                    </View>
                    {/*<ScrollView contentContainerStyle={{*/}
                    {/*    flex: 2,*/}
                    {/*    alignItems: 'center',*/}
                    {/*    borderWidth: 1,*/}
                    {/*    borderStyle: 'solid',*/}
                    {/*    borderColor: 'red'*/}
                    {/*}}>*/}
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
                        <View style={styles.quizView}>
                            <View style={styles.numberBoll}>
                                <Text style={styles.numberBollText}>
                                    {num}
                                </Text>
                            </View>
                            <Text>
                                {quizQuestions[sum].dataName}
                            </Text>
                        </View>
                        <View>
                            <RadioButton options={quizQuestions[sum].question}/>
                        </View>
                        <View style={styles.buttonView2}>
                            {sum >= quizQuestions.length
                                ? <Buttons
                                    width='136'
                                    text='Compare Prices'
                                    Click={this.handleClickPlus}
                                    color='#fa715e'
                                    colorText='#fff'
                                    borderCol='#fa715e'
                                />
                                : <Buttons
                                    width='188'
                                    text='Continue'
                                    Click={this.handleClickPlus}
                                    color='#fa715e'
                                    colorText='#fff'
                                    borderCol='#fa715e'
                                />
                            }

                            {sum >= 1
                                ? <Buttons
                                    width='136'
                                    text='Previous'
                                    Click={this.handleClickMinus}
                                    color='#fff'
                                    colorText='#b8b8b8'
                                    borderCol='#fa715e'
                                />
                                : null
                            }


                        </View>
                    {/*</ScrollView>*/}
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
    imageView: {
        width: 100 + '%',
    },
    headerImage: {
        flex: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 100 + '%',
        backgroundColor: '#fff',
    },
    textView: {
        marginTop: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'auto',
        width: 75 + '%',
    },
    textView1: {
        textAlign: 'left',
        color: "#5e5e61",
        fontFamily: "Open Sans",
        fontSize: 17,
        fontWeight: "700",
    },
    textView2: {
        marginBottom: 25,
        marginTop: 15,
        color: "#252525",
        fontFamily: "Open Sans",
        fontSize: 10,
        fontWeight: "400",
    },
    numberBoll: {
        width: 21,
        height: 20,
        borderRadius: 9,
        backgroundColor: "#4062bb",
        marginTop: 20,
        marginBottom: 20,
    },
    numberBollText: {
        textAlign: 'center',
        color: "#feffff",
        fontFamily: "Open Sans",
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 23.31,
    },
    quizView: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonView2: {
        width: 80 + '%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    }

});

export default PhonePage