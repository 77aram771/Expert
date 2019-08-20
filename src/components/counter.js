import React, {Component} from 'react';
import {Container, Content, Text, Card, Header, Body, Button, Title, CardItem} from 'native-base';

import {increment, decrement} from '../action/index';
import {Router, Scene} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from '../screens/Home'
// import LogIn from '../screens/LogIn'
// import Register from '../screens/Register'
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
