import React from 'react';
import { Image, 
        Text, 
        TouchableHighlight,  
        View } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { tailwind } from '../../tailwind.js';

const ListItem = ({ image, 
                    title, 
                    subTitle, 
                    onPress, 
                    renderRightActions }) => {
    return (

        <Swipeable 
            renderRightActions={renderRightActions}
        >

            <TouchableHighlight 
                underlayColor={`#fff8dc`}
                onPress={onPress}
            >
                <View style={tailwind('flex-row p-15e')}>

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
            </TouchableHighlight>

        </Swipeable>
    );
}

export default ListItem;