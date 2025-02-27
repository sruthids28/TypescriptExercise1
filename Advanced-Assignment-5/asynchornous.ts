async function getWeather(city: string): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const temp = Math.random() * 100; // Simulate temperature
            resolve(temp);
        }, 2000);
    });
}

// Example usage:
(async () => {
    try {
        const nyTemp = await getWeather("New York");
        console.log(`New York temperature: ${nyTemp}`);

        const londonTemp = await getWeather("London");
        console.log(`London temperature: ${londonTemp}`);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
})();