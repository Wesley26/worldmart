import React from 'react';
import { Image, 
        Text, 
        View } from 'react-native';

import { tailwind } from '../../tailwind.js';

const ListItem = ({ image, title, subTitle }) => {
    return (
        <View style={tailwind('flex-row')}>

            <Image
                source={image}
                style={tailwind('mr-2 w-70 h-70 rounded-full')}
            />

            <View style={tailwind('pl-2')}>
                <Text style={tailwind('mb-1 text-lg font-bold')}>
                    {title}
                </Text>
                <Text style={tailwind('text-gray-600 text-base font-medium')}>
                    {subTitle}
                </Text>
            </View>

        </View>
    );
}

export default ListItem;