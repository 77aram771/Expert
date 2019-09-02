import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, ScrollView, ImageBackground, Dimensions} from 'react-native';
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
        icon: [require('../assets/earth.png'),]
    },
    {
        id: 6,
        dataName: 'Good news! We\'ve found you  suppliers. Fill in the last few details \n' +
            'to get your free quotes!',
        question: ['Email'],
        icon: [require('../assets/mail.png'),]
    },
    {
        id: 7,
        dataName: '',
        question: ['Full Name', 'Company Name'],
        icon: [require('../assets/user.png'), require('../assets/factory.png'),]
    },
    {
        id: 8,
        dataName: 'This is the last page of questions',
        question: ['Phone number'],
        icon: [require('../assets/phone-call.png'),],
        text: 'Your privacy is important to us. By submitting your request, you authorize Marketing VF Ltd and up to 5 US-based providers of Telephone Systems to contact you at your number above by telephone, where calls may be recorded, and/or SMS with product offers, even if your number is on any federal, state or other "Do not call" list and to do so using automated technology. Your consent is not a condition of purchase.'
    }
];
const quizQuestions1 = [
    {
        id: 0,
        dataName: 'Are the handsets for a place of business?',
        question: ['Yes', 'No']
    }
];

let sum = 4;
let num = 1;
let num2 = 0;
let progressNum = 0;

class PhonePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stat: [],
            value: null,
            valid: {
                text: '',
                inputZip: '',
                inputEmail: '',
                inputName: '',
                inputCompany: '',
                inputPhone: ''
            },
            styleVal: {
                text: true,
                inputZip: false,
                inputEmail: false,
                inputName: false,
                inputCompany: false,
                inputPhone: false
            }

        }
    }

    changeProps = (id) => {
        this.state.stat.push(id);
        this.setState({stat: this.state.stat});
        console.log('this.state.stat', this.state.stat)
    };

    ifSum = () => {
        if (num2 === 0) {
            sum = 1;
            num2 = 5
        }
    };

    handleClickPlus = async () => {
        if (this.state.stat[0] === 0) {
            num2 = 1;
            console.log('num2', num2);
        }
        if (sum >= 2) {
            num2 = 0;
            //this.ifSum();
            console.log('num2', num2)
        }
        progressNum += 10;
        if (sum < 6) {
            await sum++;
            num = 1 + sum
            console.log('sum', sum);
        }
        this.setState({
            value: null,
        })
    };

    handleClickMinus = () => {
        num2 = 0;
        let arr = [...this.state.stat];
        arr.pop();
        this.setState({
            stat: [...arr]
        });
        console.log('arr', arr);
        progressNum -= 10;
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
        if (sum > 3) {
            progressNum += 10;
        }
        if (sum === 7) {
            sum = 0;
            num = 1;
            progressNum = 0;
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

    footerClickHome = () => {
        sum = 0;
        num = 1;
        progressNum = 0;
        Actions.Home()
    };

    ZipValid = (id) => {
        const re = /^[0-9\b]+$/;
        console.log(id);
        if (re.test(id)) {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputZip,
                    inputZip: true
                }
            }))
        } else {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputZip,
                    inputZip: false
                }
            }))
        }
        this.setState(prevState => ({
            valid: {
                ...prevState.inputZip,
                inputZip: id
            }
        }))
    };

    PhoneValid = (id) => {
        const re = /^[0-9\b]+$/;
        if (re.test(id)) {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputPhone,
                    inputPhone: true
                }
            }))
        } else {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputPhone,
                    inputPhone: false
                }
            }))
        }
        this.setState(prevState => ({
            valid: {
                ...prevState.inputPhone,
                inputPhone: id
            }
        }))
    };

    NameValid = (id) => {
        const re = /^[a-z\b]+$/;
        if (re.test(id)) {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputName,
                    inputName: true
                }
            }))
        } else {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputName,
                    inputName: false
                }
            }))
        }
        this.setState(prevState => ({
            valid: {
                ...prevState.inputName,
                inputName: id
            }
        }))
    };

    CompanyValid = (id) => {
        const re = /^[a-z\b]+$/;
        if (re.test(id)) {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputCompany,
                    inputCompany: true
                }
            }))
        } else {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputCompany,
                    inputCompany: false
                }
            }))
        }
        this.setState(prevState => ({
            valid: {
                ...prevState.inputCompany,
                inputCompany: id
            }
        }))
    };

    EmailValid = (id) => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(id)) {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputEmail,
                    inputEmail: true
                }
            }))
        } else {
            this.setState(prevState => ({
                styleVal: {
                    ...prevState.inputEmail,
                    inputEmail: false
                }
            }))
        }
        this.setState(prevState => ({
            valid: {
                ...prevState.inputEmail,
                inputEmail: id
            }
        }))
    };

    ButtonZip = () => {
        if (this.state.styleVal.inputZip) {
            if (sum > 3) {
                progressNum += 10;
            }
            if (sum === 7) {
                sum = 0;
                num = 1;
                progressNum = 0;
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
        } else if (this.state.styleVal.inputZip === '') {
            alert('Enter True Zip Code')
        } else {
            alert('Enter True Zip Code')
        }

    };

    ButtonPhone = () => {
        if (this.state.styleVal.inputPhone) {
            if (sum > 3) {
                progressNum += 10;
            }
            if (sum === 7) {
                sum = 0;
                num = 1;
                progressNum = 0;
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
        } else if (this.state.styleVal.inputPhone === '') {
            alert('Enter True Zip Code')
        } else {
            alert('Enter True Zip Code')
        }

    };

    ButtonName = () => {
        if (this.state.styleVal.inputName || this.state.styleVal.inputCompany) {
            if (sum > 3) {
                progressNum += 10;
            }
            if (sum === 7) {
                sum = 0;
                num = 1;
                progressNum = 0;
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
        } else if (this.state.styleVal.inputName === '' || this.state.styleVal.inputCompany) {
            alert('Enter True Zip Code')
        } else {
            alert('Enter True Zip Code')
        }

    };

    ButtonEmail = () => {
        if (this.state.styleVal.inputEmail) {
            if (sum > 3) {
                progressNum += 10;
            }
            if (sum === 7) {
                sum = 0;
                num = 1;
                progressNum = 0;
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
        } else if (this.state.styleVal.inputEmail === '') {
            alert('Enter True Zip Code')
        } else {
            alert('Enter True Zip Code')
        }

    };

    render() {
        const {
            inputEmail,
            inputZip,
            inputName,
            inputCompany,
            inputPhone,
        } = this.state;

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
                        {
                            num2 === 1
                                ? <Text style={sum <= 3 ? styles.quizViewText : styles.quizViewText2}>
                                    {quizQuestions1[0].dataName}
                                </Text>
                                : <Text style={sum <= 3 ? styles.quizViewText : styles.quizViewText2}>
                                    {quizQuestions[sum].dataName}
                                </Text>
                        }


                    </View>
                    <View style={styles.quizText}>
                        {
                            num2 === 1
                                ? <RadioButton
                                    options={quizQuestions1[0].question}
                                    nextQuez={this.handleClickPlus}
                                    stat={this.changeProps}/>
                                : null
                        }
                        {
                            num2 === 1
                                ? null
                                : sum <= 3 ? <RadioButton
                                    options={quizQuestions[sum].question}
                                    nextQuez={this.handleClickPlus}
                                    stat={this.changeProps}/>
                                : null

                        }
                        {
                            sum === 4
                                ? <Inputs
                                    text={quizQuestions[sum].question[0]}
                                    icon={quizQuestions[sum].icon[0]}
                                    change={this.ZipValid}
                                    value={inputZip}
                                    style={this.state.styleVal.inputZip}
                                />
                                : null
                        }
                        {
                            sum === 5
                                ? <Inputs
                                    text={quizQuestions[sum].question[0]}
                                    icon={quizQuestions[sum].icon[0]}
                                    change={this.EmailValid}
                                    value={inputEmail}
                                    style={this.state.styleVal.inputEmail}
                                />
                                : null
                        }
                        {
                            sum === 6
                                ? <Inputs
                                    text={quizQuestions[sum].question[0]}
                                    icon={quizQuestions[sum].icon[0]}
                                    change={this.NameValid}
                                    value={inputName}
                                />
                                : null
                        }
                        {
                            sum === 6
                                ? <Inputs
                                    text={quizQuestions[sum].question[1]}
                                    icon={quizQuestions[sum].icon[1]}
                                    change={this.CompanyValid}
                                    value={inputCompany}
                                />

                                : null
                        }
                        {
                            sum === 7
                                ? <Inputs
                                    text={quizQuestions[sum].question[0]}
                                    icon={quizQuestions[sum].icon[0]}
                                    change={this.PhoneValid}
                                    value={inputPhone}
                                />
                                : null
                        }

                    </View>
                    <View style={styles.buttonView2}>
                        {
                            sum < 1
                                ? <Buttons
                                    width='188'
                                    text='COMPARE PRICES'
                                    color='#fa715e'
                                    colorText='#fff'
                                    borderCol='#fa715e'
                                    Click={this.buttonClickNext}
                                />
                                : sum <= 3
                                ? <Buttons
                                    width='136'
                                    text='CONTINUE'
                                    color='#fa715e'
                                    colorText='#fff'
                                    borderCol='#fa715e'
                                    Click={this.buttonClickNext}
                                />
                                : null
                        }
                        {
                            sum === 4
                                ? <Buttons
                                    width='136'
                                    text='CONTINUE'
                                    color='#fa715e'
                                    colorText='#fff'
                                    borderCol='#fa715e'
                                    Click={this.ButtonZip}
                                />
                                : null
                        }
                        {
                            sum === 5
                                ? <Buttons
                                    width='136'
                                    text='CONTINUE'
                                    color='#fa715e'
                                    colorText='#fff'
                                    borderCol='#fa715e'
                                    Click={this.ButtonEmail}
                                />
                                : null
                        }
                        {
                            sum === 6
                                ? <Buttons
                                    width='136'
                                    text='CONTINUE'
                                    color='#fa715e'
                                    colorText='#fff'
                                    borderCol='#fa715e'
                                    Click={this.ButtonName}
                                />
                                : null
                        }
                        {
                            sum === 7
                                ? <Buttons
                                    width='136'
                                    text='CONTINUE'
                                    color='#fa715e'
                                    colorText='#fff'
                                    borderCol='#fa715e'
                                    Click={this.ButtonPhone}
                                />
                                : null
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
                <FooterButton
                    Click={this.footerClickHome}
                />
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