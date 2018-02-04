import React from 'react';
import { Scene, Router, Actions, ActionCons } from 'react-native-router-flux';
import LoginScreen from './LoginScreen'
import MainScreen from './MainScreen'

import usernameImg from '../images/username.png';
import bgSrc from '../images/wallpaper.jpeg';
export default class App extends React.Component<{}> {
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

