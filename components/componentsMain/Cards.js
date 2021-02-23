import React from 'react';
import { Image, 
        Text, 
        View } from 'react-native';

import { tailwind } from '../../tailwind.js';

const Cards = ({ title, subTitle, image }) => {

    return (
        <View style={tailwind('bg-white mb-20e rounded-lg overflow-hidden')}>

            <Image 
                source={image} 
                style={tailwind('w-full h-200')}
            />
            
            <View style={tailwind('p-20e')}>

                <Text style={tailwind('mb-3')}>
                    {title}
                </Text>

                <Text style={tailwind('text-blue-500 font-bold')}>
                    {subTitle}
                </Text>

            </View>

        </View>
    );
}

export default Cards;