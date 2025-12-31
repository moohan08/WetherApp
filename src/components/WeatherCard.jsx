import { getWeatherIconUrl } from '../services/weatherApi';

/**
 * WeatherCard Component
 * Displays current weather information for a city
 * @param {Object} weatherData - Weather data from API
 */
const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    name,
    sys: { country },
    coord,
    main: { temp, feels_like, humidity },
    weather: [weatherInfo],
    wind: { speed },
  } = weatherData;

  const lat = coord?.lat;
  const lon = coord?.lon;

  const iconUrl = getWeatherIconUrl(weatherInfo.icon);

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10 mb-8 border-2 border-white/20 transition-all duration-300 hover:shadow-purple-500/20 hover:border-white/30 hover:scale-[1.02] animate-scale-in">
      {/* Location Header with City, Country, and Coordinates */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <span className="text-2xl">📍</span>
          <span className="text-sm font-semibold text-white/90">Location</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
          {name}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-lg font-bold text-white drop-shadow">
              {country}
            </span>
          </div>
          {lat !== undefined && lon !== undefined && (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xs md:text-sm text-white/90 font-medium">
                📍 {lat >= 0 ? `${lat.toFixed(2)}°N` : `${Math.abs(lat).toFixed(2)}°S`}, {lon >= 0 ? `${lon.toFixed(2)}°E` : `${Math.abs(lon).toFixed(2)}°W`}
              </span>
            </div>
          )}
        </div>
        <p className="text-xl text-white/90 capitalize font-medium">
          {weatherInfo.description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Temperature Section */}
        <div className="flex items-center gap-6">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
            <img
              src={iconUrl}
              alt={weatherInfo.main}
              className="w-28 h-28 md:w-40 md:h-40 relative z-10 drop-shadow-2xl"
            />
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-bold text-white drop-shadow-lg mb-2">
              {Math.round(temp)}°C
            </div>
            <p className="text-white/80 text-base md:text-lg font-medium">
              Feels like {Math.round(feels_like)}°C
            </p>
          </div>
        </div>

        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 w-full md:w-auto">
          <div className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="text-sm text-white/80 mb-2 font-medium">💧 Humidity</p>
            <p className="text-3xl font-bold text-white drop-shadow">
              {humidity}%
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500/30 to-orange-500/30 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300">
            <p className="text-sm text-white/80 mb-2 font-medium">💨 Wind Speed</p>
            <p className="text-3xl font-bold text-white drop-shadow">
              {speed} m/s
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

