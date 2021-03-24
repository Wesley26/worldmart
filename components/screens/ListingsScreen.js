import React from 'react';
import { FlatList } from 'react-native';

import { tailwind } from '../../tailwind.js';

import Cards from '../componentsMain/Cards.js';
import routes from '../navigation/routes.js';
import Screen from '../componentsMain/Screen.js';

//listings is a temporary solution
const listings = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require("../assets/jacket.jpg"),
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1000,
        image: require("../assets/couch.jpg"),
    },
];

const ListingsScreen = ({ navigation }) => {
    return (
        
        <Screen style={tailwind('bg-gray-100 p-20e')}>

            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => 
                    <Cards 
                        title={item.title}
                        subTitle={`$ ${item.price}`}
                        image={item.image}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />

        </Screen>

    );
}

export default ListingsScreen;