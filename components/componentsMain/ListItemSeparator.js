import React from 'react';
import { View } from 'react-native';

import { tailwind } from '../../tailwind.js';

const ListItemSeparator = () => {
    return (

        <View style={tailwind('bg-gray-100 w-full h-1')} />

    );
}

export default ListItemSeparator;