import React from 'react';
import { Image,
        View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../componentsMain/AppButton.js';
import AppTextInput from '../componentsMain/AppTextInput.js';
import ErrorMessage from '../componentsMain/ErrorMessage.js';
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

            <Formik
                initialValues={{ email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors }) => (
                    <>
                        
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")} 
                            placeholder="Email"
                            textContentType="emailAddress"
                        />

                        <ErrorMessage error={errors.email} />

                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")} 
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                        />

                        <ErrorMessage error={errors.password} />

                        <View style={tailwind('bg-appRed my-3 rounded-lg')}>
                            <AppButton 
                                title="Login"
                                onPress={handleSubmit}
                            />
                        </View>

                    </>
                ) }
            </Formik>

            

        </Screen>

    );
}

export default LoginScreen;