import React from 'react';
import { Image } from 'react-native';
import * as Yup from 'yup';

import {
            AppForm,
            AppFormField,
            SubmitButton,
        } from '../componentsMain/forms';
import Screen from '../componentsMain/Screen.js';

import { tailwind } from '../../tailwind.js';

const validationSchema = Yup.object().shape({

    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
    
});

const LoginScreen = () => {

    return (
        
        <Screen style={tailwind('p-5')}>

            <Image 
                style={tailwind('mt-5 mb-3 w-80 h-80 self-center')}
                source={require("../assets/Worldmart_Logo.png")}
            />

            <AppForm
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />

                <SubmitButton
                    title="Login"
                />
            </AppForm>

            

        </Screen>

    );
}

export default LoginScreen;