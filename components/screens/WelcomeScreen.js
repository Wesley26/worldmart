import React from 'react';
import { Image, 
        ImageBackground,
        View,
        Text } from 'react-native';

import { tailwind } from '../../tailwind.js';

import AppButton from '../componentsMain/AppButton.js';


const WelcomeScreen = () => {

    const backgroundPic = require("../assets/background.jpg");
    const worldmart_Logo = require("../assets/Worldmart_Logo.png");
    const tagLine = "The mobile yard sale";

    return (
        <ImageBackground
            blurRadius={10}
            source={backgroundPic}
            style={tailwind('flex-1 justify-end items-center')}>

            <View style={tailwind('absolute top-70 items-center')}>
                <Image 
                    source={worldmart_Logo}
                    style={tailwind('mb-3 w-150 h-150')}
                />
                <Text
                    style={tailwind('text-18 font-semibold')}
                >{tagLine}</Text>
            </View>

            <View style={tailwind('bg-appRed px-3 w-11/12 h-70 rounded-full')}>
                <AppButton 
                    title="Login"
                    onPress={() => console.log("You logged in!")}
                />
            </View>

            <View style={tailwind('py-2')} />

            <View style={tailwind('bg-appGreen px-3 w-11/12 h-70 rounded-full')}>
            <AppButton 
                    title="Register"
                    onPress={() => console.log("You have registered!")}
                />
            </View>

            <View style={tailwind('py-4')} />

        </ImageBackground>
    );
}

export default WelcomeScreen;