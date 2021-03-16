import React from 'react';
import {
    Image,
    Text,
    TouchableHighlight,
    View
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
                <View style={tailwind('bg-white flex-row p-15e items-center')}>

                    {IconComponent}
                    {image && <Image
                        source={image}
                        style={tailwind('mr-2 w-70 h-70 rounded-full')}
                    />}

                    <View style={tailwind('ml-2 pl-2 justify-center')}>
                        <Text 
                            style={tailwind('mb-1 max-w-list-Item-Size text-lg font-bold')}
                            numberOfLines={1}
                        >
                            {title}
                        </Text>
                        {subTitle && <Text 
                                        style={tailwind('max-w-list-Item-Size text-gray-600 text-base font-medium')}
                                        numberOfLines={3}
                                    >
                            {subTitle}
                        </Text>}
                    </View>

                    <View style={tailwind('flex-1')}>
                    </View>

                    <MaterialCommunityIcons
                            name="chevron-right"
                            color={`#a9a9a9`}
                            size={25}
                    />

                </View>
            </TouchableHighlight>

        </Swipeable>
    );
}

export default ListItem;