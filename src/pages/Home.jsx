import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import Forecast from '../components/Forecast';
import Loader from '../components/Loader';
import { useWeather } from '../hooks/useWeather';

/**
 * Home Page Component
 * Main page that displays weather information
 */
const Home = () => {
  const [city, setCity] = useState('');

  const { weatherData, forecastData, loading, error } = useWeather(city);

  const handleSearch = (cityName) => {
    setCity(cityName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900 animate-gradient py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <header className="text-center mb-8 animate-slide-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            <span className="inline-block animate-float">🌦️</span> Weather App
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium">
            Get real-time weather information for any city
          </p>
        </header>

        {/* Search Bar */}
        <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="animate-scale-in">
            <Loader />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/90 backdrop-blur-sm border-2 border-red-300 rounded-xl p-4 mb-8 animate-scale-in shadow-lg">
            <p className="text-white font-semibold text-center">{error}</p>
          </div>
        )}

        {/* Weather Data */}
        {!loading && !error && weatherData && (
          <div className="animate-scale-in">
            <WeatherCard weatherData={weatherData} />
            <Forecast forecastData={forecastData} />
          </div>
        )}

        {/* Initial State */}
        {!loading && !error && !weatherData && (
          <div className="text-center py-16 animate-fade-in">
            <div className="inline-block p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
              <p className="text-white/90 text-xl font-medium mb-2">
                🌍 Discover Weather Anywhere
              </p>
              <p className="text-white/70">
                Enter a city name above to get started
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

