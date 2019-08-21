import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Button, Title, CardItem} from 'native-base';

import {increment, decrement} from '../action/index';
import {Router, Scene} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from '../screens/Home'
// import LogIn from '../screens/LogIn'
// import Register from '../screens/Register'

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

class Counter extends Component {
    render() {
        console.log(this.props.count);
        return (
            <Router hideNavBar="true">
                <Scene key="root">
                    <Scene key="Home" component={Home} hideNavBar={true} initial={true}/>
                </Scene>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Counter);
