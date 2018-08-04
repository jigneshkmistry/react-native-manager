import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from "./components/LoginForm";

class App extends Component {

    componentWillMount() {
        firebase = require("firebase");
        firebase.initializeApp({
            apiKey: "AIzaSyA7v5D-iz46jNip1Qig8yXM-rNficaz6GQ",
            authDomain: "manager-3b512.firebaseapp.com",
            databaseURL: "https://manager-3b512.firebaseio.com",
            projectId: "manager-3b512",
            storageBucket: "manager-3b512.appspot.com",
            messagingSenderId: "708950248384"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers)} >
                <LoginForm />
            </Provider>
        );
    }

};

export default App;