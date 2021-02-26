import React from 'react';
import { View,
        FlatList } from 'react-native';

import { tailwind } from '../../tailwind.js';

import Icon from '../componentsMain/Icon.js';
import ListItem from '../componentsMain/ListItem.js';
import ListItemSeparatorComponenet from '../componentsMain/ListItemSeparator.js';
import Screen from '../componentsMain/Screen.js';

const AccountScreen = () => {

    const theTitle = "Wesley Dzitzer";
    const theSubTitle = "wesdzitzer45@gmail.com";
    const wesImage = require('../assets/wes.png');

    const logoutTitle = "Log Out";
    const logoutIconTitle = "logout";


    const containerStyle = tailwind('my-20e');

    const menuItems = [
        { 
            title: "My Listings",
            icon: {
                name: "format-list-bulleted",
                backgroundColor: "#fc5c65",
            },
        },
        { 
            title: "My Messages",
            icon: {
                name: "email",
                backgroundColor: "#4ECDC4",
            },
        },
    ]

    return (
        
        <Screen style={tailwind('bg-gray-100')}>

            <View style={containerStyle}>
                <ListItem
                    title={theTitle}
                    subTitle={theSubTitle} 
                    image={wesImage}
                />
            </View>

            <View style={containerStyle}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponenet}
                    renderItem={({ item }) =>
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>

            <ListItem 
                title={logoutTitle}
                IconComponent={
                    <Icon
                        name={logoutIconTitle}
                        backgroundColor="#ffe66d"
                    />
                }
            />

        </Screen>

    );
}

export default AccountScreen;