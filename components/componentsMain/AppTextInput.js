import React from 'react';
import { TextInput, 
        View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tailwind } from '../../tailwind.js';

import defaultStyles from '../config/fontStyles.js'

const AppTextInput = ({ icon, ...otherProps }) => {
    return (

        <View style={tailwind('bg-red-100 my-10e p-15e flex-row w-full rounded-lg')}>

           {icon && <MaterialCommunityIcons 
                name={icon}
                size={20}
                color={`#8b0000`}
                style={tailwind('mr-3')}
           />}
           <TextInput 
                style={defaultStyles.text}
                {...otherProps}
           />

        </View>
        
    );
}

export default AppTextInput;