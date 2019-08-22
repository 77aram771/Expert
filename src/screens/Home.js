import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FooterButton from "../components/FooterButton";

class Home extends Component {
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.headerImage}>
                    <Image source={require('../assets/HeaderBackground.png')} style={{width: 100 + '%', height: 110}}/>
                    <View style={styles.textView}>
                        <View style={styles.textView1}>
                            <Text style={styles.textStyle}>
                                Start Saving {"\n"} Today!
                            </Text>
                            <Text style={styles.textStyle2}>
                                Get the best deal today
                            </Text>
                        </View>
                        <View style={styles.textView2}>
                            <TouchableOpacity onPress={() => Actions.PhonePage()} style={{borderRadius: 20}}>
                                <ImageBackground
                                    source={require('../assets/3-layers.png')}
                                    style={styles.iconView1}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.TrackingPage()} style={{borderRadius: 20}}>
                                <ImageBackground
                                    source={require('../assets/4-layers.png')}
                                    style={styles.iconView2}
                                />
                            </TouchableOpacity>

                        </View>
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
    headerImage: {
        width: 100 + '%',
        height: 110,
    },
    textView: {
        width: 100 + '%',
        marginBottom: 70,
    },
    textView1: {
        alignItems: 'center',
    },
    textView2: {
        marginTop: 30,
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconView1: {
        backgroundColor: '#fff',
        width: 168,
        height: 168,
    },
    iconView2: {
        backgroundColor: '#fff',
        width: 168,
        height: 168,
    },
    textStyle: {
        color: "#53a5c7",
        textAlign: 'center',
        fontFamily: "Open Sans",
        fontSize: 35,
        fontWeight: "700",
        lineHeight: 60,
    },
    textStyle2: {
        color: "#252525",
        textAlign: 'center',
        fontFamily: "Open Sans",
        fontSize: 10,
        fontWeight: "700",
    },
});

export default Home;