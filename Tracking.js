const axios = require('axios');
require('dotenv').config();

async function getTrackingInfo(trackingNumber) {
    try {
        const response = await axios.get(`https://api-eu.dhl.com/track/shipments`, {
            headers: {
                'DHL-API-Key': process.env.DHL_API_KEY,
            },
            params: {
                trackingNumber: trackingNumber,
            }
        });
        
        const events = response.data.shipments[0].events;
        const lastEvent = events[events.length - 1];
        
        return lastEvent;
    } catch (error) {
        console.error("Error fetching tracking information:", error);
        return null;
    }
}

// Example usage
getTrackingInfo('7777777770').then(event => console.log(event));
//console.log("DHL API Key:", process.env.DHL_API_KEY);
