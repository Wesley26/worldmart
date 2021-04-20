import React, { useEffect } from 'react';
import { FlatList, 
         Text, 
         View } from 'react-native';

import { tailwind } from '../../tailwind.js';

import ActivityIndicator from '../componentsMain/ActivityIndicator.js';
import AppButton from '../componentsMain/AppButton.js';
import Cards from '../componentsMain/Cards.js';
import listingsApi from '../api/listings.js';
import routes from '../navigation/routes.js';
import Screen from '../componentsMain/Screen.js';

import useApi from '../hooks/useApi.js';

const ListingsScreen = ({ navigation }) => {

    const getListingsApi = useApi(listingsApi.getListings);
    const errorText = "Couldn't retrieve the listings.";

    useEffect(() => {

        getListingsApi.request(1, 2, 3);

    }, []);

    return (
        
        <Screen style={tailwind('bg-gray-100 p-20e')}>
            {getListingsApi.error && <>
                <Text style={tailwind('max-w-list-Details text-blue-500 font-bold')}>
                    {errorText}
                </Text>
                <View style={tailwind('my-5 bg-appRed rounded-full')}>
                    <AppButton
                        title="Retry"
                        onPress={loadListings}
                    />
                </View>
            </>}
            <ActivityIndicator 
                visible={getListingsApi.loading} 
            />
            <FlatList 
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                    <Cards 
                        title={item.title}
                        subTitle={`$ ${item.price}`}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />

        </Screen>

    );
}

export default ListingsScreen;