import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tailwind } from "../../tailwind.js";

const NewListingButton = ({ onPress }) => {
    return (
        
        <TouchableOpacity
            onPress={onPress}
        >

        <View style={[
                        { bottom: 20, borderWidth: 10, borderRadius: 40, borderColor: `#fff8dc` }, 
                        tailwind('bg-red-400 justify-center items-center h-80 w-80 rounded-full')
                    ]}>
            <MaterialCommunityIcons 
                name="plus-circle"
                color="white"
                size={40}
            />
        </View>

        </TouchableOpacity>

    );
}

export default NewListingButton;