/**
 * Temp note: all screen componenets at the moment require importing
 * separately by hand. Comment/uncomment which screen component
 * should be displayed until next steps are complete.
 */

//const App = () => { return <WelcomeScreen />; }; export default App; //temp welcome screen

//const App = () => { return <ViewImageScreen />; }; export default App; //temp view image screen

/**
// temporary App component solution for Cards.js
const App = () => {

    return (
        <View
            style={tailwind('bg-gray-200 px-20e pb-20e pt-100e rounded-lg')}
        >

            <Cards
                title="Red jacket for sale"
                subTitle="$100"
                image={require("./components/assets/jacket.jpg")}
            />

        </View>
    )
};

export default App;
*/

//const App = () => { return <ListingDetailsScreen />; }; export default App; //temp ListingDetailsScreen screen

//const App = () => { return <MessagesScreen />; }; export default App; //temp messages screen

/**
const App = () => { 
    
    return (

            <Screen>

                <Icon 
                    name="email"
                    size={100}
                    backgroundColor="red"
                    iconColor="white" 
                />
            
            </Screen>

        ); 
}; 

export default App; //temp Screen with Icon
*/

/**
const App = () => { 

    //subTitle="This is sample text in a sub title."
    
    return (

            <Screen>

                <ListItem 
                    title="My amazing title"
                    ImageComponenet={<Icon name="email" />}
                />
            
            </Screen>

        ); 
}; 

export default App; //temp Screen with ListItem
*/

//const App = () => { return <AccountScreen />; }; export default App; //temp accounts screen

//const App = () => { return <ListingsScreen />; }; export default App; //temp listings screen

/**
//Testing AppTextInput, AppPicker, and Screen
const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
];

const App = () => {
    
    const [category, setCategory] = useState(categories[0]);
    
    return (

        <Screen>
            <AppPicker
                selectedItem={category}
                onSelectItem={item => setCategory(item)}
                items={categories}
                icon="apps"
                placeholder="Category" 
            />
            <AppTextInput
                icon="email"
                placeholder="Email" 
            />
        </Screen>

        ); 
};

export default App;
*/

//const App = () => { return <LoginScreen />; }; export default App; //temp LoginScreen

//const App = () => { return <ListingEditScreen />; }; export default App; //temp ListingEditScreen

import React from 'react';

//import { tailwind } from './tailwind.js';

//import AppTextInput from './components/componentsMain/AppTextInput.js';
//import AppPicker from './components/componentsMain/AppPicker.js';
//import Screen from './components/componentsMain/Screen.js';
//import Icon from './components/componentsMain/Icon.js';
//import ListItem from './components/componentsMain/ListItem.js';
//import ImageInput from './components/componentsMain/ImageInput.js';
//import ImageInputList from './components/componentsMain/ImageInputList.js';

//import WelcomeScreen from "./components/screens/WelcomeScreen.js";
//import ViewImageScreen from "./components/screens/ViewImageScreen.js";
//import Cards from "./components/componentsMain/Cards.js";
//import ListingDetailsScreen from './components/screens/ListingDetailsScreen.js';
//import MessagesScreen from "./components/screens/MessagesScreen.js";
//import AccountScreen from './components/screens/AccountScreen.js';
//import ListingsScreen from './components/screens/ListingsScreen.js';
//import LoginScreen from './components/screens/LoginScreen';
import ListingEditScreen from './components/screens/ListingEditScreen.js';

const App = () => { return <ListingEditScreen />; }; export default App; //temp ListingEditScreen