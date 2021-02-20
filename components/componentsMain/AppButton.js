import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { tailwind } from '../../tailwind.js';

const AppButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
            style={tailwind('bg-transparent p-5 items-center')}
            onPress={onPress}>
                
            <Text style={tailwind('bg-transparent text-18 text-white uppercase font-bold')}>
                {title}
            </Text>

        </TouchableOpacity>
    );
}

export default AppButton;