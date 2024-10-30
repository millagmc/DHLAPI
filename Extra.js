const axios = require('axios');
require('dotenv').config();


async function getServicePoints(countryCode, city) {
    try {
        const response = await axios.get(`https://api.dhl.com/location-finder/v1/find-by-address?countryCode=${countryCode}&addressLocality=${city}`, {
            headers: {
                'DHL-API-Key': process.env.DHL_API_KEY, // Ensure your API key is set in the environment variable
            }
            // No need for a params object since the variables are already in the URL
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
getServicePoints('GB', 'London').then(names => console.log(names)); // Example function call
