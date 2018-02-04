import React, {Component} from 'react';
import { Scene, Router, Actions, ActionCons } from 'react-native-router-flux';
import LoginScreen from './Login/LoginScreen'
import MainScreen from './MainScreen'


export default class App extends Component<{}> {
  render() {
    return (
        <Router>
            <Scene key="root">
                <Scene key="loginScreen"
                    component={LoginScreen}
                    animation='fade'
                    hideNavBar={true}
                    initial={true}
                    />
                <Scene key="mainScreen"
                    component={MainScreen}
                    animation='fade'
                    hideNavBar={true}
                    />
            </Scene>
        </Router>
    );
  }
}

