import React from 'react';
import { Image, 
        Text, 
        TouchableHighlight,  
        View } from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { tailwind } from '../../tailwind.js';

const ListItem = ({ IconComponent,
                    image, 
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
                <View style={tailwind('bg-white flex-row p-15e')}>

                    {IconComponent}
                    {image && <Image
                        source={image}
                        style={tailwind('mr-2 w-70 h-70 rounded-full')}
                    />}

                    <View style={tailwind('ml-2 pl-2 justify-center')}>
                        <Text style={tailwind('mb-1 text-lg font-bold')}>
                            {title}
                        </Text>
                        {subTitle && <Text style={tailwind('text-gray-600 text-base font-medium')}>
                            {subTitle}
                        </Text>}
                    </View>

                </View>
            </TouchableHighlight>

        </Swipeable>
    );
}

export default ListItem;