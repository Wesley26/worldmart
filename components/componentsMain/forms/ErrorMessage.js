import React from 'react';
import { Text } from 'react-native';

import { tailwind } from '../../../tailwind.js';

const ErrorMessage = ({ error, visible }) => {

    if (!visible || !error) {
        return null;
    };

    return (

        <Text style={tailwind('bg-transparent p-3 text-lg text-danger font-bold')}>
            {error}
        </Text>

    );
}

export default ErrorMessage;