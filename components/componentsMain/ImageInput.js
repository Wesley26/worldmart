import React, { useEffect } from 'react';
import { Alert, 
        Image, 
        TouchableWithoutFeedback, 
        View 
        } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { tailwind } from "../../tailwind.js";


const ImageInput = ({
                     imageUri,
                     onChangeImage
                    }) => {

    useEffect(() => {

        requestPermission();

    }, []);

    const requestPermission = async () => {

        const { granted } = await ImagePicker.requestCameraPermissionsAsync();

        if (!granted) {
            alert('You need to enable permissions to access the library.');
        };
    };

    const handlePress = () => {

        if(!imageUri) {

            selectImage();

        } else {

            Alert.alert('Delete', 
                        'Are you sure you want to delete this image?',
                        [
                            { 
                                text: 'Yes',
                                onPress:  () => {
                                    onChangeImage(null)
                                }
                            },
                            {
                                text: 'No'
                            }
                        ]
            );
        }

    };

    const selectImage = async () => {

        try {

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });

            if (!result.cancelled) {
                onChangeImage(result.uri);
            }

        } catch (error) {
            console.log('Error reading an image', error);

        }

    }
    
    return (

        <TouchableWithoutFeedback
            onPress={handlePress}
        >
        
        <View style={tailwind('bg-yellow-200 h-100 w-100 rounded-lg justify-center items-center overflow-hidden')}>

            {!imageUri && <MaterialCommunityIcons 
                                color={`#808080`}
                                name="camera"
                                size={40}
            />}

            {imageUri && <Image 
                            source={{ uri: imageUri }}
                            style={tailwind('h-full w-full')}
            />}
        </View>

        </TouchableWithoutFeedback>

    );
}

export default ImageInput;