import React from 'react';
import { Image, 
        View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tailwind } from '../../tailwind.js';

const ViewImageScreen = () => {

    const chair = require("../assets/chair.jpg");

    return (
        <View style={tailwind('bg-black flex-1')}>

            <View style={tailwind('absolute top-40px left-30px')}>
                <MaterialCommunityIcons 
                    name="close"
                    color="white"
                    size={35}
                />
            </View>

            <View style={tailwind('absolute top-40px right-30px')}>
                <MaterialCommunityIcons 
                    name="trash-can-outline"
                    color="white"
                    size={35}
                />
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