import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton.js';

import { tailwind } from '../../../tailwind.js';

const SubmitButton = ({ title }) => {

    const { handleSubmit } = useFormikContext();

    return (

        <View style={tailwind('bg-appRed my-3 rounded-lg')}>
            <AppButton
                title={title}
                onPress={handleSubmit}
            />
        </View>

    );
}

export default SubmitButton;