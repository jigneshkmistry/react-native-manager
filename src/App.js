import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from "redux-thunk";
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store} >
                <LoginForm />
            </Provider>
        );
    }

};

export default App;