import React from 'react';
import * as Yup from 'yup';

import {
    AppForm,
    AppFormField,
    AppFormImagePicker,
    AppFormPicker,
    SubmitButton,
} from "../componentsMain/forms";

import useLocation from '../hooks/useLocation';

import CategoryPickerItem from "../componentsMain/CategoryPickerItem.js";
import Screen from "../componentsMain/Screen.js";

import { tailwind } from '../../tailwind.js';

const validationSchema = Yup.object().shape({

    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image.")

});

const categories = [

    { label: "Furniture", value: 1, backgroundColor: "crimson", icon: "lamp" },
    { label: "Cars", value: 2, backgroundColor: "coral", icon: "car" },
    { label: "Camera", value: 3, backgroundColor: "khaki", icon: "camera" },
    { label: "Games", value: 4, backgroundColor: "lightgreen", icon: "nintendo-game-boy" },
    { label: "Clothing", value: 5, backgroundColor: "lightblue", icon: "shoe-heel" },
    { label: "Sports", value: 6, backgroundColor: "lightskyblue", icon: "basketball" },
    { label: "Movies & Music", value: 7, backgroundColor: "mediumblue", icon: "headphones" },
    { label: "Books", value: 8, backgroundColor: "mediumpurple", icon: "book" },
    { label: "Other", value: 9, backgroundColor: "gray", icon: "television" },

];

const ListingEditScreen = () => {

    const location = useLocation();

    return (
        
        <Screen style={tailwind('p-5')}>

            <AppForm 
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={(values) => console.log(values, location)}
                validationSchema={validationSchema}
            >

                <AppFormImagePicker 
                    name="images"
                />

                <AppFormField 
                    maxLength={255}
                    name="title"
                    placeholder="Title"
                />

                <AppFormField 
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />

                <AppFormPicker 
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />

                <AppFormField 
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />

                <SubmitButton 
                    title="Post"
                />

            </AppForm>
        </Screen>

    );
}

export default ListingEditScreen;