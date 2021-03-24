import React from 'react';
import { Image, 
        Text, 
        TouchableWithoutFeedback, 
        View } from 'react-native';

import { tailwind } from '../../tailwind.js';

const Cards = ({ title, subTitle, image, onPress }) => {

    return (

        <TouchableWithoutFeedback
            onPress={onPress}
        >

        <View style={tailwind('bg-white mb-20e rounded-lg overflow-hidden')}>

            <Image 
                source={image} 
                style={tailwind('w-full h-200')}
            />
            
            <View style={tailwind('p-20e')}>

                <Text 
                    style={tailwind('mb-3 max-w-list-Details')}
                    numberOfLines={1}>
                    {title}
                </Text>

                <Text 
                    style={tailwind('max-w-list-Details text-blue-500 font-bold')}
                    numberOfLines={3}
                >
                    {subTitle}
                </Text>

            </View>

        </View>

        </TouchableWithoutFeedback>
    );
}

export default Cards;