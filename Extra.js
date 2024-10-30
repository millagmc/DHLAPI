// const axios = require('axios');
// require('dotenv').config();


// async function getServicePoints(countryCode, city) {
//     try {
//         const response = await axios.get(`https://api.dhl.com/location-finder/v1/find-by-address?countryCode=${countryCode}&addressLocality=${city}`, {
//             headers: {
//                 'DHL-API-Key': process.env.DHL_API_KEY, // Ensure your API key is set in the environment variable
//             }
//             // No need for a params object since the variables are already in the URL
//         });

//         const locations = response.data.locations || []; // Use optional chaining to handle cases where locations might not be present
//         const locationNames = locations.map(location => location.name); // Extract location names

//         return locationNames; // Return the array of location names
//     } catch (error) {
//         console.error("Error fetching service points:", error);
//         return null; // Return null in case of error
//     }
// }

// // Example usage
// getServicePoints('GB', 'London').then(names => console.log(names)); // Example function call


//With the radius option

const axios = require('axios');
require('dotenv').config();

async function getServicePoints(countryCode, city, postalCode = null) {
    try {
        // Construct the base URL
        let url = `https://api.dhl.com/location-finder/v1/find-by-address?countryCode=${countryCode}&addressLocality=${city}&addressPostalCode=${postalCode}`;

 
        // Make the GET request
        const response = await axios.get(url, {
            headers: {
                'DHL-API-Key': process.env.DHL_API_KEY, // Ensure your API key is set in the environment variable
            }
        });

        const locations = response.data.locations || []; // Use optional chaining to handle cases where locations might not be present
        const locationNames = locations.map(location => location.name); // Extract location names

        return locationNames; // Return the array of location names
    } catch (error) {
        console.error("Error fetching service points:", error);
        return null; // Return null in case of error
    }
}

// Example usage
getServicePoints('GB', 'London', 'N15 3HP').then(names => console.log(names)); // Example function call with postal code
require('dotenv').config();

async function getServicePoints(countryCode, city, postalCode = null, radius = 5000) {
    try {
        // Construct the base URL with postal code and radius
        let url = `https://api.dhl.com/location-finder/v1/find-by-address?countryCode=${countryCode}&addressLocality=${city}&radius=${radius}`; 

        // Append postal code if provided
        if (postalCode) {
            url += `&postalCode=${postalCode}`; // Add postal code to the URL
        }

        // Make the GET request
        const response = await axios.get(url, {
            headers: {
                'DHL-API-Key': process.env.DHL_API_KEY, // Ensure your API key is set in the environment variable
            }
        });

        const locations = response.data.locations || []; // Use optional chaining to handle cases where locations might not be present
        const locationNames = locations.map(location => location.name); // Extract location names

        return locationNames; // Return the array of location names
    } catch (error) {
        console.error("Error fetching service points:", error);
        return null; // Return null in case of error
    }
}

// Example usage
getServicePoints('GB', 'London', 'N15 3HP').then(names => console.log(names)); // Example function call with postal code and default radius
