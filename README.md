# DHLAPI
Testing DHL API


# Overview of the getServicePoints Function

The `getServicePoints` function is designed to interact with the DHL Location Finder API, enabling users to retrieve service points based on specified geographical and postal parameters. This function is particularly useful for individuals and businesses that require access to DHL service locations for shipping and logistics purposes. 

## Functionality

The function accepts four parameters:
- **countryCode**: A string representing the ISO code of the country (e.g., 'GB' for Great Britain).
- **city**: The name of the city where service points are sought (e.g., 'London').
- **postalCode** (optional): A string specifying the postal code, which can help narrow down search results (e.g., 'E1 6AN').
- **radius** (optional): A numerical value indicating the search radius in meters. The default value is set to 5000 meters but can be modified by the user.

### API Interaction

When the function is called, it constructs a URL that conforms to the DHL API's required format. The base URL for the DHL Location Finder API is `https://api.dhl.com/location-finder/v1/find-by-address`. The function appends the necessary query parameters, including the country code, city, postal code (if provided), and radius.

### Making the Request

Using the Axios library, the function sends a GET request to the constructed URL. The request includes headers that contain the DHL API key, which is stored in an environment variable (`process.env.DHL_API_KEY`). This key is essential for authenticating the request and ensuring that the API can track usage and access levels.

### Response Handling

Once the request is made, the function awaits the response from the API. If successful, the response contains a list of locations that meet the specified criteria. The function extracts the `locations` array from the response data. If no locations are found, an empty array is returned. To enhance usability, the function maps through the locations to extract the `name` property of each location, resulting in an array of location names.

### Error Handling

Robust error handling is implemented to ensure that any issues encountered during the API request do not cause the application to crash. If an error occurs, the function logs the error message to the console and returns `null`. This approach allows developers to easily diagnose issues while maintaining the application’s stability.

### Example Usage

The function can be utilized in various scenarios. For example, a user may call the function as follows:
```javascript
getServicePoints('GB', 'London', 'E1 6AN').then(names => console.log(names));
```
This call retrieves all service points in London, United Kingdom, specifically around postal code E1 6AN, within a radius of 5000 meters. The output will be a list of service point names, which can then be displayed to the user or used for further processing.


--- 

This document outlines the core functionality of the `getServicePoints` function, how it operates, and its practical applications. If you need further details or modifications, feel free to ask!
