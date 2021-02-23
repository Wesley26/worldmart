import React from 'react';
import { Image, 
        View,
        Text } from 'react-native';

import { tailwind } from '../../tailwind.js';

import ListItem from '../componentsMain/ListItem.js';

const ListingDetailsScreen = () => {

    const theJacketPic = require('../assets/jacket.jpg');
    const titleText = "Red jacket for sale";
    const subTitleText = "$100";

    const theProfilePic = require('../assets/wes.png');
    const theName = "Wesley Dzitzer";
    const numberOfListings = "10 Listings";

    return (
        <View>

            <Image 
                source={theJacketPic}
                style={tailwind('w-full h-300')}
            />

            <View style={tailwind('p-20e')}>

                <Text style={tailwind('mb-3 text-xl font-medium')}>
                    {titleText}
                </Text>

                <Text style={tailwind('text-blue-500 text-lg font-bold')}>
                    {subTitleText}
                </Text>

                <View style={tailwind('my-8')}>

                    <ListItem 
                        image={theProfilePic}
                        title={theName}
                        subTitle={numberOfListings}
                    />

                </View>

            </View>

        </View>
    );
}

export default ListingDetailsScreen;