import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, ScrollView, ImageBackground, Dimensions, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FooterButton from "../components/FooterButton";
import ProgressBar from "../components/ProgressBar";
import Buttons from "../components/Buttons";
import RadioButton from "../components/RadioButton";
import Inputs from "../components/Inputs";


const quizQuestions = [
    {
        id: 1,
        dataName: 'Do you already have a phone system',
        question: ['Yes', 'No']
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
    {
        id: 5,
        dataName: 'Your ZIP code ensures quotes are as accurate as \n' +
            'possible for your area.',
        question: ['What is your ZIP code?'],
    },
    {
        id: 6,
        dataName: 'Good news! We\'ve found you  suppliers. Fill in the last few details \n' +
            'to get your free quotes!',
        question: ['Email'],
    },
    {
        id: 7,
        dataName: '',
        question: ['Full Name', 'Company Name'],
    },
    {
        id: 8,
        dataName: 'This is the last page of questions',
        question: ['Phone number'],
        text: 'Your privacy is important to us. By submitting your request, you authorize Marketing VF Ltd and up to 5 US-based providers of Telephone Systems to contact you at your number above by telephone, where calls may be recorded, and/or SMS with product offers, even if your number is on any federal, state or other "Do not call" list and to do so using automated technology. Your consent is not a condition of purchase.'
    }
];
let sum = 0;
let num = 1;
let progressNum = 12.5;

class PhonePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stat: [],
            value: null,
        }
    }

    handleClickPlus = () => {
        setTimeout(() => {
            if (sum < 6) {
                sum++;
                num = 1 + sum
            }
            this.setState({
                value: null,
            })
        })

    };
    handleClickMinus = () => {
        sum--;
        num = 1 + sum;
        this.setState({
            value: null
        })
    };
    buttonClickNext = () => {
        if (sum <= 3) {
            alert('This field is required')
        }
        if (sum === 7) {
            sum = 0;
            num = 1;
            Actions.PreviewPage()
        }
        if (sum <= 6) {
            setTimeout(() => {
                if (sum >= 4) {
                    sum++;
                    num = 1 + sum;
                }

                this.setState({
                    value: null,
                })
            })
        }
    };

    render() {
        console.log(sum)
        return (
            <View style={styles.Container}>
                <View style={styles.headerImage}>
                    <View style={styles.imageView}>
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
                        <ProgressBar
                            progress={progressNum}
                        />
                    </View>
                    <View style={sum <= 3 ? styles.quizView : {justifyContent: 'center'}}>
                        {
                            sum <= 3
                                ? <View style={styles.numberBoll}>
                                    <Text style={styles.numberBollText}>
                                        {num}
                                    </Text>
                                </View> : null
                        }
                        <Text style={sum <= 3 ? styles.quizViewText : styles.quizViewText2}>
                            {quizQuestions[sum].dataName}
                        </Text>

                    </View>
                    <View style={styles.quizText}>
                        {
                            sum <= 3
                                ? <RadioButton options={quizQuestions[sum].question} nextQuez={this.handleClickPlus}/>
                                : <Inputs text={quizQuestions[sum].question[0]}/>
                        }
                        {
                            sum === 6 ? <Inputs text={quizQuestions[sum].question[1]}/> : null
                        }
                    </View>
                    <View style={styles.buttonView2}>
                        {sum < 1
                            ? <Buttons
                                width='188'
                                text='COMPARE PRICES'
                                color='#fa715e'
                                colorText='#fff'
                                borderCol='#fa715e'
                                Click={this.buttonClickNext}
                            />
                            : <Buttons
                                width='136'
                                text='CONTINUE'
                                color='#fa715e'
                                colorText='#fff'
                                borderCol='#fa715e'
                                Click={this.buttonClickNext}
                            />
                        }
                        {sum >= 1
                            ? <Buttons
                                width='136'
                                text='Previous'
                                Click={this.handleClickMinus}
                                color='#fff'
                                colorText='#b8b8b8'
                                borderCol='#53a5c7'
                            />
                            : null
                        }
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        width: 90 + '%',
                        marginTop: 50
                    }}>
                        <Text style={{
                            justifyContent: 'center', textAlign: 'center', color: "#858585",
                            fontFamily: "Open Sans",
                            fontSize: 10,
                            fontWeight: '400'
                        }}>
                            {sum === 7 ? quizQuestions[sum].text : null}
                        </Text>
                    </View>
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
        width: 100 + '%',
    },
    textView1: {
        width: 75 + '%',
        textAlign: 'left',
        color: "#5e5e61",
        fontFamily: "Open Sans",
        fontSize: 17,
        fontWeight: "700",
    },
    textView2: {
        width: 75 + '%',
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
        marginRight: 7,
        justifyContent: 'center',
        alignItems: 'center'
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
        width: 80 + '%',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    quizViewText: {
        color: '#252525',
        fontFamily: "Open Sans",
        fontSize: 17,
        fontWeight: '700',
    },
    quizViewText2: {
        color: "#252525",
        fontFamily: "Open Sans",
        fontSize: 10,
        fontWeight: "700",
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    quizText: {
        width: 100 + '%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonView2: {
        width: 80 + '%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row-reverse',
    }

});

export default PhonePage