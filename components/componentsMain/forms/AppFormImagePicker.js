import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from "./ErrorMessage.js";
import ImageInputList from '../ImageInputList.js';

import { tailwind } from "../../../tailwind.js";

const AppFormImagePicker = ({
                             name
                            }) => {

    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = uri => {

        setFieldValue(name, [...imageUris, uri]);

    };

    const handleRemove = uri => {

        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri));

    };

    return (
    
    <>
        <ImageInputList 
            imageUris={imageUris}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
        />

        <ErrorMessage 
            error={errors[name]}
            visible={touched[name]}
        />

    </>

    );
}

export default AppFormImagePicker;