import React, {Component} from 'react';

import {increment, decrement} from '../action';
import {Router, Scene} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Home from '../screens/Home'
import PhonePage from '../screens/PhonePage'
import TrackingPage from '../screens/TrackingPage'
import PreviewPage from '../screens/PreviewPage'

class Counter extends Component {
    render() {
        return (
            <Router hideNavBar="true">
                <Scene key="root">
                    <Scene key="Home" component={Home} hideNavBar={true} initial={true}/>
                    <Scene key="PhonePage" component={PhonePage} hideNavBar={true}  />
                    <Scene key="TrackingPage" component={TrackingPage} hideNavBar={true}  />
                    <Scene key="PreviewPage" component={PreviewPage} hideNavBar={true} />
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
