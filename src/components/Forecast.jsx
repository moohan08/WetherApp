import { getWeatherIconUrl } from '../services/weatherApi';

/**
 * Forecast Component
 * Displays 5-day weather forecast
 * @param {Object} forecastData - Forecast data from API
 */
const Forecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  // Group forecast by day and get one forecast per day (at 12:00 PM)
  const dailyForecasts = [];
  const processedDates = new Set();

  forecastData.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dateKey = date.toDateString();

    // Get forecast for midday (around 12:00 PM) for each day
    if (!processedDates.has(dateKey) && date.getHours() >= 11 && date.getHours() <= 14) {
      dailyForecasts.push(item);
      processedDates.add(dateKey);
    }
  });

  // If we don't have enough midday forecasts, take the first forecast of each day
  if (dailyForecasts.length < 5) {
    const firstForecasts = [];
    const firstDates = new Set();

    forecastData.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toDateString();

      if (!firstDates.has(dateKey) && firstForecasts.length < 5) {
        firstForecasts.push(item);
        firstDates.add(dateKey);
      }
    });

    // Merge and deduplicate
    const merged = [...dailyForecasts];
    firstForecasts.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toDateString();
      if (!processedDates.has(dateKey)) {
        merged.push(item);
        processedDates.add(dateKey);
      }
    });

    dailyForecasts.length = 0;
    dailyForecasts.push(...merged.slice(0, 5));
  }

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
    }
  };

  const gradientColors = [
    'from-blue-500/40 to-cyan-500/40',
    'from-purple-500/40 to-pink-500/40',
    'from-pink-500/40 to-rose-500/40',
    'from-orange-500/40 to-yellow-500/40',
    'from-indigo-500/40 to-blue-500/40',
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 border-2 border-white/20 animate-scale-in">
      <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-lg text-center md:text-left">
        📅 5-Day Forecast
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {dailyForecasts.slice(0, 5).map((item, index) => {
          const iconUrl = getWeatherIconUrl(item.weather[0].icon);
          return (
            <div
              key={index}
              className={`bg-gradient-to-br ${gradientColors[index]} backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-2 animate-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm font-bold text-white mb-3 drop-shadow">
                {formatDate(item.dt)}
              </p>
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
                <img
                  src={iconUrl}
                  alt={item.weather[0].main}
                  className="w-20 h-20 mx-auto relative z-10 drop-shadow-lg"
                />
              </div>
              <p className="text-xs text-white/90 capitalize mb-3 font-medium">
                {item.weather[0].description}
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-white drop-shadow">
                  {Math.round(item.main.temp_max)}°
                </span>
                <span className="text-lg text-white/70">
                  {Math.round(item.main.temp_min)}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;

