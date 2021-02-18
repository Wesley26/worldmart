import React from 'react';
import { Image, View } from 'react-native';
import { tailwind } from '../../tailwind.js';

const ViewImageScreen = () => {

    const chair = require("../assets/chair.jpg");

    return (
        <View style={tailwind('bg-black flex-1')}>
            <View style={tailwind('bg-appRed w-50 h-50 absolute top-40px left-30px')}>

            </View>
            <View style={tailwind('bg-appGreen w-50 h-50 absolute top-40px right-30px')}>

            </View>
            <Image 
                source={chair}
                resizeMode="contain"
                style={tailwind('w-full h-full')}
            />
        </View>
    );
}

export default ViewImageScreen;