import React, { useRef } from 'react';
import { ScrollView, 
        View } from 'react-native';

import ImageInput from './ImageInput.js';

import { tailwind } from "../../tailwind.js";

const ImageInputList = ({
                          imageUris = [],
                          onAddImage,
                          onRemoveImage
                        }) => {

    const scrollView = useRef();

    return (

        <View>

            <ScrollView
                ref={scrollView}
                horizontal={true}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
        
            <View style={tailwind('flex-row')}>

            {imageUris.map(uri => (

                <View 
                    key={uri} 
                    style={tailwind('mx-1')}
                >
                    <ImageInput 
                        imageUri={uri}
                        onChangeImage={() => onRemoveImage(uri)}
                    />
                </View>

                ))
            }

            <View style={tailwind('mx-1')}>
                <ImageInput 
                    onChangeImage={uri => onAddImage(uri)}
                />
            </View>

            </View>

            </ScrollView>

        </View>

    );
}

export default ImageInputList;