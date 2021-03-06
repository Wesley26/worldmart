import React from 'react';
import { View, 
        Text, 
        TouchableOpacity } from 'react-native';

import Icon from "./Icon.js";

import { tailwind } from "../../tailwind.js";

const CategoryPickerItem = ({
                              item,
                              onPress
                            }) => {
    return (

        <View style={tailwind('w-33p px-30e py-15e items-center')}>

            <TouchableOpacity
                onPress={onPress}
            >
                <Icon 
                    backgroundColor={item.backgroundColor}
                    name={item.icon}
                    size={80}
                />
            </TouchableOpacity>

            <Text style={tailwind('pt-2 max-w-list-Details text-blue-500 text-center font-bold')}>
                {item.label}
            </Text>

        </View>

    );
}

export default CategoryPickerItem;