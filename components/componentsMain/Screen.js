import React from 'react';
import { View } from 'react-native';

import { tailwind } from '../../tailwind.js';

const Screen = ({ children, style }) => {
    return (

        <View style={[tailwind('mt-16 flex-1'), style]}>
            {children}
        </View>

    );
}

export default Screen;