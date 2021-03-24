import React from 'react';
import { Image, 
        View,
        Text } from 'react-native';

import { tailwind } from '../../tailwind.js';

import ListItem from '../componentsMain/ListItem.js';

const ListingDetailsScreen = ({ route }) => {

    const listing = route.params;

    const theProfilePic = require('../assets/wes.png');
    const theName = "Wesley Dzitzer";
    const numberOfListings = "10 Listings";

    return (
        <View>

            <Image 
                source={listing.image}
                style={tailwind('w-full h-300')}
            />

            <View style={tailwind('p-20e')}>

                <Text 
                    style={tailwind('mb-3 max-w-list-Details text-xl font-medium')}
                    numberOfLines={1}
                >
                    {listing.title}
                </Text>

                <Text 
                    style={tailwind('max-w-list-Details text-blue-500 text-lg font-bold')}
                    numberOfLines={3}
                >
                    ${listing.price}
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