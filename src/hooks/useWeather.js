import { useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../services/weatherApi';

/**
 * Custom hook for fetching and managing weather data
 * @param {string} cityName - Name of the city to fetch weather for
 * @returns {Object} Weather data, loading state, error state, and refetch function
 */
export const useWeather = (cityName) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch if cityName is empty
    if (!cityName || cityName.trim() === '') {
      setWeatherData(null);
      setForecastData(null);
      setError(null);
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch both current weather and forecast in parallel
        const [currentWeather, forecast] = await Promise.all([
          getCurrentWeather(cityName),
          getForecast(cityName),
        ]);

        setWeatherData(currentWeather);
        setForecastData(forecast);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
        setForecastData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityName]);

  return {
    weatherData,
    forecastData,
    loading,
    error,
  };
};


