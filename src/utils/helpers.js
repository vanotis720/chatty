import { Dimensions, Linking, Alert, Platform } from "react-native";
import { formatDateToLocale } from "./format";
import { privacypolicies } from "../constants/commons";

export const getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

export const isEmpty = function (obj) {
    return Object.keys(obj).length > 0 ? false : true;
}

export const containsObject = function (obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].property === obj) {
            return true;
        }
    }
    return false;
}

export const formatLength = function (text, count, insertDots) {
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
}

export const calculateFontSize = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return Math.min(screenWidth, screenHeight) * 0.04;
};

export const redirectToTerms = () => {
    Linking.openURL(privacypolicies);
}

export const calculatePrice = (prices, type, distance) => {
    switch (type) {
        case 'Moto':
            return prices.moto * distance;
        case 'Petita':
            return prices.petita * distance;
        case 'Taxi jaune':
            return prices.taxijaune * distance;
        case 'Taxi perso':
            return prices.taxiperso * distance;
        default:
            return null
    }
}

export const maskEmail = (email, visibleChars = 2) => {
    const [localPart, domain] = email.split('@');

    const maskedLocalPart = localPart.slice(0, visibleChars) + '*'.repeat(localPart.length - visibleChars);
    const maskedEmail = `${maskedLocalPart}@${domain}`;

    return maskedEmail;
}

function addMetersToCoordinates(latitude, longitude, distance, bearing) {
    // Earth's radius in meters
    const earthRadius = 6378137; // Approximate value for WGS84 ellipsoid

    // Convert latitude and longitude from degrees to radians
    const lat1 = latitude * Math.PI / 180;
    const lon1 = longitude * Math.PI / 180;

    // Convert distance from meters to radians
    const angularDistance = distance / earthRadius;

    // Convert bearing from degrees to radians
    const bearingRad = bearing * Math.PI / 180;

    // Calculate new latitude
    const lat2 = Math.asin(Math.sin(lat1) * Math.cos(angularDistance) +
        Math.cos(lat1) * Math.sin(angularDistance) * Math.cos(bearingRad));

    // Calculate new longitude
    const lon2 = lon1 + Math.atan2(Math.sin(bearingRad) * Math.sin(angularDistance) * Math.cos(lat1),
        Math.cos(angularDistance) - Math.sin(lat1) * Math.sin(lat2));

    // Convert latitude and longitude back to degrees
    const newLatitude = lat2 * 180 / Math.PI;
    const newLongitude = lon2 * 180 / Math.PI;

    return { latitude: newLatitude, longitude: newLongitude };
}


export const callNumber = (phone) => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phone}`;
    }
    else {
        phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Contact indisponible', 'Informations de contact non disponible')
            } else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
};

// // Example usage
// const initialLatitude = 37.7749; // Example initial latitude
// const initialLongitude = -122.4194; // Example initial longitude
// const distanceToAdd = 1000; // Example distance in meters
// const bearing = 90; // Example bearing in degrees (east)

// const newCoordinates = addMetersToCoordinates(initialLatitude, initialLongitude, 100, 90);
// console.log('New GPS location:', newCoordinates);


