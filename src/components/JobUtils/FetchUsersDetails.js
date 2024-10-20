 const getDeviceDetails = async () => {
    const uaData = navigator.userAgentData || {};  // Check if userAgentData is supported
    const platform = navigator.platform || 'unknown';
    let device = null;

    if (navigator.userAgentData) {
        const data = await navigator.userAgentData.getHighEntropyValues(['platform', 'platformVersion', 'mobile']);
        let deviceName = data.platform; // Use platform as a fallback

        // Check if it's a mobile device
        if (data.mobile) {
            deviceName = `Mobile ${deviceName}`;
        }

        device =  deviceName;
    }

    const result =  {
        brands: uaData.brands ? uaData.brands.map(brand => brand.brand).join(', ') : 'unknown',  // Brands of the user agent
        userAgent: navigator.userAgent, // Information about the browser, device, etc.
        platform: navigator.userAgentData.platform,   // The platform the browser is running on (Windows, Mac, Linux)
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        userDevice: device
    };

    console.log("Result:" , result);
    
    return result;
};

export {getDeviceDetails}
