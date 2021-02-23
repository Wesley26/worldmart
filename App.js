/**
 * Temp note: all screen componenets at the moment require importing
 * separately by hand. Comment/uncomment which screen component
 * should be displayed until next steps are complete.
 */

import React from 'react';
//import { View } from 'react-native';

//import { tailwind } from './tailwind.js';

import WelcomeScreen from "./components/screens/WelcomeScreen.js";
//import ViewImageScreen from "./components/screens/ViewImageScreen.js";
//import Cards from "./components/componentsMain/Cards.js";
//import ListingDetailsScreen from './components/screens/ListingDetailsScreen.js';

const App = () => { return <WelcomeScreen />; }; export default App; //temp welcome screen

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