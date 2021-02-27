import { Platform } from 'react-native';

/**
 * To prevent the issue of creating more than one source of styles,
 * use tailwind. This styles config exists due to the comparison
 * of fontFamily for both iOS and android, which is not compatible
 * with tailwind. This styles object is limited to text input.
 * 
 * See tailwind.config.js for all style configurations for this app.
 */

export default {
    text: {
        color: `#374151`,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
};