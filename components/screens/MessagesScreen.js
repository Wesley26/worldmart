import React, { useState } from 'react';
import { FlatList, 
        } from 'react-native';

import ListItem from '../componentsMain/ListItem.js';
import ListItemDeleteAction from '../componentsMain/ListItemDeleteAction.js';
import ListItemSeparator from '../componentsMain/ListItemSeparator.js';
import Screen from '../componentsMain/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: require('../assets/wes.png'),
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/wes.png'),
    }
]

const MessagesScreen = () => {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        
        //update the new array of message objects, re-render
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (

        <Screen>

            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log(`The ${item.title} ${item.description} item was pressed!`)}
                        renderRightActions={() => 
                                <ListItemDeleteAction 
                                    onPress={() => handleDelete(item)}
                                />}
                    />}
                ItemSeparatorComponent={() => <ListItemSeparator />}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: 'T1',
                            description: 'D1',
                            image: require('../assets/wes.png'),
                        },
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/wes.png'),
                        }
                    ])
                }}
            />

        </Screen> 

    );
}

export default MessagesScreen;