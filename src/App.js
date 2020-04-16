import React from 'react';
import './App.css';
import Login from './client/screens/Login';
import MainMenu from './client/screens/MainMenu';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { screen: 'Login' }
  }
  componentDidUpdate(){
    console.log('app state', this.state)
  }
  render() {
    if (this.state.screen == 'Login') {
      return (
        <Provider store={store}>
          <Login />
        </Provider>
      )
    }
    else if (this.state.screen == 'MainMenu') {
      return (
        <MainMenu />
      )
    }
  }
}
