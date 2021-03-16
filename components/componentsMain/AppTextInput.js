import React from 'react';
import { TextInput, 
        View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tailwind } from '../../tailwind.js';

import defaultStyles from '../config/fontStyles.js'

const AppTextInput = ({ icon,
                        width = '100%',
                    ...otherProps }) => {
    return (

        <View style={[
                tailwind('bg-red-100 my-10e p-15e flex-row rounded-lg'),
                { width }
                    ]}>

           {icon && <MaterialCommunityIcons 
                name={icon}
                size={20}
                color={`#8b0000`}
                style={tailwind('mr-3')}
           />}
           <TextInput
                placeholderTextColor={`#d2691e`}
                style={defaultStyles.text}
                {...otherProps}
           />

        </View>
        
    );
}

export default AppTextInput;