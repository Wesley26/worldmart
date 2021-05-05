import { AsyncStorage } from '@react-native-async-storage/async-storage';
import moment from 'moment';

/**
 * NOTE: Async storage is depreciated and does not work 
 * both in Expo, and react-native eco-systems.
 * We have decided to keep the file and simply not use it in
 * the app.
 */

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {

    try {

        const item = {
            value,
            timestamp: Date.now(),
        };

        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));

    } catch (error) {
        
        console.log(error);

    };

};

const isExpired = (item) => {

    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, 'minutes') > expiryInMinutes;

};

const get = async (key) => {

    try {

        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value);

        if(!item) return null;

        if (isExpired(item)) {

            await AsyncStorage.removeItem(prefix + key);
            return null;

        };

        return item.value;
        
    } catch (error) {

        console.log(error);
        
    };

};

export default {
    store,
    get
};