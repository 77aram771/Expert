import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import FooterButton from "../components/FooterButton";
import {Actions} from "react-native-router-flux";


const text1 = [
    {
        id: 1,
        title: 'What happens next?',
        texts: [
            'If there is a match between your specifications and our provider’s criteria, you will receive a call from ' +
            'between 1-5 providers, depending on your specifications. You are usually called by the next working day, ' +
            'but if you submitted your request within office hours today, you’re likely to be contacted within the next ' +
            'hour.',
            'You will have a free phone consultation with the relevant provider(s) to discuss prices and ask any ' +
            'questions that you may have.\n'
        ]
    },
    {
        id: 2,
        title: 'Please be aware that you may not \n' +
            'receive a quote if:',
        texts: [
            "The specifications you provided in the form are not eligible for the provider's product/services",
            "There is an error in the contact details you provided, such as an invalid phone number " +
            "We are sorry for any inconvenience caused."
        ]
    },
];
const text = [
    {
        id: 1,
        title: 'FAQs\n' +
            'Why can\'t you show me prices now?',
        texts: [
            "We know prices are a big consideration when making a purchase decision. However prices vary greatly " +
            "depending on your specific, unique requirements. Sit tight, though – you’ll soon be speaking with our " +
            "trusted providers who can answer any questions you have, including more specific pricing information.\n" +
            "\n"
        ]
    },
    {
        id: 2,
        title: 'Why do I have to fill out a form \n' +
            'to get accurate prices?',
        texts: [
            'Prices are calculated on a case by case basis - not a "one size fits all" solution. In order to get a ' +
            'really accurate price, it is best to answer a few simple questions. We’ll then connect you to leading ' +
            'providers who can discuss the finer details of pricing and requirements with you.'
        ]
    },
    {
        id: 3,
        title: 'Why do you need my address and \n' +
            'phone number?',
        texts: [
            'We need your address because, depending on your needs, it might be helpful for you to speak to a company ' +
            'that’s based near you. If you do end up buying from them, it could be more convenient for you. ' +
            'With regards to your phone number, we just want to make things simple for you. We believe that it’s much ' +
            'easier to discuss on the phone, where our providers can answer specific questions you may have. In any case, ' +
            'you can feel safe giving us your details - we promise we won’t spam you or use your details for any other ' +
            'purpose other than connecting you with our trusted providers.'
        ]
    },
    {
        id: 4,
        title: 'Where will my details go? Will they \n' +
            'be secure?',
        texts: [
            'Your privacy is very important to us and is taken seriously. We’ll only ever pass your personal data on' +
            ' to our trusted partners that we connect you with and you have consented to, to provide the service/product ' +
            'you have requested. We have a data retention policy that clearly sets out how long we will keep your data. ' +
            'We will only keep your data for as long as necessary to provide you with the services/products you’re' +
            ' interested in.'
        ]
    },
    {
        id: 5,
        title: 'How do we make money?',
        texts: [
            'When you submit a request and we connect you with relevant providers, ' +
            'they pay us a small fee for making the connection.'
        ]
    },
];

class PreviewPage extends Component {

    footerClickHome = () => {
        Actions.Home()
    };

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.imageView}>
                    <Image source={require('../assets/headerBack.png')} style={{width: 100 + '%', height: 60}}/>
                </View>
                <Text style={styles.text1}>We've received your request for quotes. We are reviewing your details
                    so we can connect you with the most appropriate providers based on the information you've
                    given us.
                </Text>
                <ScrollView>
                    {
                        text1.map(item => {
                            return (
                                <View style={styles.ViewBox} key={item.id}>
                                    <View style={styles.ViewBox1}>
                                        <Text style={styles.ViewTitle}>
                                            {item.title}
                                        </Text>
                                    </View>
                                    <View>
                                        <View style={styles.ViewBox2}>
                                            <View style={styles.ViewBox1View}>
                                                <View style={styles.numberBoll}>
                                                    <Text style={styles.numberBollText}>
                                                        1
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.ViewBox2View}>
                                                <Text style={styles.ViewBox2Text}>
                                                    {item.texts[0]}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.ViewBox2}>
                                            <View style={styles.ViewBox1View}>
                                                <View style={styles.numberBoll}>
                                                    <Text style={styles.numberBollText}>
                                                        2
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={styles.ViewBox2View}>
                                                <Text style={styles.ViewBox2Text}>
                                                    {item.texts[1]}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    {
                        text.map(item => {
                            return(
                                <View style={styles.ViewBox} key={item.id}>
                                    <View style={styles.ViewBox1}>
                                        <Text style={styles.ViewTitle}>
                                            {item.title}
                                        </Text>
                                    </View>
                                    <View>
                                        <View style={styles.ViewBox2}>
                                            <View style={styles.ViewBox2View}>
                                                <Text style={styles.ViewBox2Text}>
                                                    {item.texts[0]}
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                </View>
                            )
                        })
                    }

                </ScrollView>
                <FooterButton Click={this.footerClickHome}/>
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
    ViewTitle: {
        color: "#5e5e61",
        fontFamily: "Open Sans",
        fontSize: 17,
        fontWeight: "700",
        textTransform: "uppercase"
    },
    ViewBox: {

    },
    ViewBox1: {
        marginBottom: 17,
        marginLeft: 20
    },
    ViewBox1View: {
        flex: 0,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        alignContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 20,
    },
    ViewBox2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 15 + '%',
    },
    ViewBox2View: {
    },
    ViewBox2Text: {
        paddingLeft: 25,
        paddingRight: 20 + '%',
    },
    ViewText1: {
        width: 60 + '%',
        marginTop: 16,
        marginBottom: 18,
    },
    text1: {
        paddingRight: 10 + '%',
        paddingLeft: 25 + '%',
        color: "#252525",
        fontFamily: "Open Sans",
        fontSize: 10,
        fontWeight: "700",
        height: 40,
        marginTop: 16,
        marginBottom: 18,
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
        alignItems: 'center',
        borderColor: '#4062bb',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    numberBollText: {
        textAlign: 'center',
        color: "#feffff",
        fontFamily: "Open Sans",
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 23.31,
    },
});

export default PreviewPage;