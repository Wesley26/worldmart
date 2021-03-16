import React, { useState } from 'react';
import { Button, 
        FlatList, 
        Modal, 
        Text, 
        TouchableWithoutFeedback, 
        View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PickerItem from '../componentsMain/PickerItem.js';
import Screen from '../componentsMain/Screen.js';

import { tailwind } from '../../tailwind.js';

const AppPicker = ({ icon,
                    items,
                    numberOfColumns = 1,
                    onSelectItem,
                    PickerItemComponent = PickerItem, 
                    placeholder,
                    selectedItem,
                    width = "100%" }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (

        <React.Fragment>

        <TouchableWithoutFeedback
            onPress={() => setModalVisible(true)}
        >

            <View style={[
                        tailwind('bg-red-100 my-10e p-15e flex-row rounded-lg'),
                        { width }
                        ]}>

                {icon && <MaterialCommunityIcons 
                        name={icon}
                        size={20}
                        color={`#8b0000`}
                        style={tailwind('mr-3')}
                />}

                <Text style={tailwind('mb-3 text-xl font-medium flex-1')}>
                        {selectedItem ? selectedItem.label : placeholder}
                </Text>
                <MaterialCommunityIcons 
                        name="chevron-down"
                        size={20}
                        color={`#8b0000`}
                />

            </View>

        </TouchableWithoutFeedback>

        <Modal 
            visible={modalVisible}
            animationType="slide"
        >
            <Screen>

                <Button 
                    title="Close"
                    onPress={() => setModalVisible(false)}
                />

                <FlatList 
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) => 
                        <PickerItemComponent
                            item={item} 
                            label={item.label}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />
                    }
                />
            </Screen>
        </Modal>

        </React.Fragment>
        
    );
}

export default AppPicker;