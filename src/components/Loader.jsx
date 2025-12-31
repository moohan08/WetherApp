/**
 * Loader Component
 * Displays a loading spinner while fetching weather data
 */
const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-24 h-24 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        {/* Middle spinning ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-transparent border-t-purple-300 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        {/* Inner pulsing dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse-glow"></div>
      </div>
      <p className="mt-6 text-white/90 text-lg font-medium animate-pulse">
        Loading weather data...
      </p>
    </div>
  );
};

export default Loader;

