/**
 * Weather API Service
 * Handles all API calls to OpenWeatherMap API
 */

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

/**
 * Fetch current weather data for a city
 * @param {string} cityName - Name of the city
 * @returns {Promise<Object>} Weather data
 */
export const getCurrentWeather = async (cityName) => {
  if (!API_KEY) {
    throw new Error('API key is missing. Please set VITE_WEATHER_API_KEY in your .env file.');
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the city name and try again.');
      }
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your API key.');
      }
      throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message.includes('City not found') || error.message.includes('Invalid API key')) {
      throw error;
    }
    throw new Error('Network error. Please check your internet connection.');
  }
};

/**
 * Fetch 5-day weather forecast for a city
 * @param {string} cityName - Name of the city
 * @returns {Promise<Object>} Forecast data
 */
export const getForecast = async (cityName) => {
  if (!API_KEY) {
    throw new Error('API key is missing. Please set VITE_WEATHER_API_KEY in your .env file.');
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/forecast?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Please check the city name and try again.');
      }
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your API key.');
      }
      throw new Error(`Failed to fetch forecast data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.message.includes('City not found') || error.message.includes('Invalid API key')) {
      throw error;
    }
    throw new Error('Network error. Please check your internet connection.');
  }
};

/**
 * Get weather icon URL from OpenWeatherMap
 * @param {string} iconCode - Icon code from API
 * @returns {string} Icon URL
 */
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};


