import React from 'react';
import { View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
//Note: Dynamic re-usable componenets don't use tailwind.

const Icon = ({
    name,
    size = 40,
    backgroundColor = "#000",
    iconColor = "#fff",
}) => {
    return (
        
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: backgroundColor,
            alignItems: "center",
            justifyContent: "center",
        }}>
            <MaterialCommunityIcons
                name={name}
                color={iconColor}
                size={size * 0.5}
            />
        </View>

    );
}

export default Icon;