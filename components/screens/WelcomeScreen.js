import React from 'react';
import { Image, 
        ImageBackground,
        View,
        Text } from 'react-native';
import { tailwind } from '../../tailwind.js';


const WelcomeScreen = () => {

    const backgroundPic = require("../assets/background.jpg");
    const Worldmart_Logo = require("../assets/Worldmart_Logo.png");
    const tagLine = "The mobile yard sale";

    return (
        <ImageBackground
            source={backgroundPic}
            style={tailwind('flex-1 justify-end items-center')}>

            <View style={tailwind('absolute top-70 items-center')}>
                <Image 
                    source={Worldmart_Logo}
                    style={tailwind('w-150 h-150')}
                />
                <Text>{tagLine}</Text>
            </View>

            <View style={tailwind('bg-appRed w-full h-70')}>

            </View>
            <View style={tailwind('bg-appGreen w-full h-70')}>

            </View>
        </ImageBackground>
    );
}

export default WelcomeScreen;