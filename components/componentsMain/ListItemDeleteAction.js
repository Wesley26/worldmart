import React from 'react';
import { TouchableWithoutFeedback, 
        View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { tailwind } from '../../tailwind.js';

const ListItemDeleteAction = ({ onPress }) => {
    return (
        
        <TouchableWithoutFeedback
            onPress={onPress}
        >

            <View style={tailwind('bg-danger w-70 justify-center items-center')}>

                <MaterialCommunityIcons 
                    name="trash-can"
                    size={35}
                    color={`#f8f8ff`}
                />

            </View>

        </TouchableWithoutFeedback>

    );
}

export default ListItemDeleteAction;