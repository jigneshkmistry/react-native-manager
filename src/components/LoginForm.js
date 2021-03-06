import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text)
    }

    onLoginPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        value={this.props.email}
                        placeholder="user@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        value={this.props.password}
                        placeholder="password"
                        secureTextEntry
                        onChangeText={this.onPasswordChanged.bind(this)}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    <Button onPress={this.onLoginPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = function (state) {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);