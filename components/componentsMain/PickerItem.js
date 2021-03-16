import React from 'react';
import { Text,
        TouchableOpacity } from 'react-native';

import { tailwind } from '../../tailwind.js';

const PickerItem = ({ item, onPress }) => {
    return (

        <TouchableOpacity
            onPress={onPress}
        >

            <Text style={tailwind('p-20e text-xl font-medium flex-1')}>
                {item.label}
            </Text>

        </TouchableOpacity>

    );
}

export default PickerItem;