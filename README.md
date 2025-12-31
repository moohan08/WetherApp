# 🌦️ Weather App

A modern, responsive weather application built with React.js and Tailwind CSS. Get real-time weather information and 5-day forecasts for any city worldwide.

## ✨ Features

- 🔍 **Search by City**: Search for weather information by city name
- 🌡️ **Current Weather**: Display temperature, weather condition, humidity, and wind speed
- 📅 **5-Day Forecast**: View weather forecast for the next 5 days
- 🎨 **Modern UI**: Clean, card-based design with smooth transitions
- 📱 **Responsive Design**: Works seamlessly on mobile and desktop devices
- 🌙 **Dark Mode Ready**: UI supports dark mode (can be toggled with Tailwind's dark mode)
- ⚡ **Fast & Lightweight**: Built with Vite for optimal performance
- 🔄 **Loading States**: Beautiful loading animations while fetching data
- ❌ **Error Handling**: User-friendly error messages for invalid cities or API issues

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free tier available)

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. **Get your API key**
   
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API keys section
   - Copy your API key
   - Paste it in your `.env` file

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── SearchBar.jsx   # City search input
│   ├── WeatherCard.jsx # Current weather display
│   ├── Forecast.jsx    # 5-day forecast display
│   └── Loader.jsx      # Loading spinner
├── pages/              # Page components
│   └── Home.jsx        # Main page
├── services/           # API services
│   └── weatherApi.js   # OpenWeatherMap API calls
├── hooks/              # Custom React hooks
│   └── useWeather.js   # Weather data fetching hook
├── App.jsx             # Root component
├── main.jsx            # Application entry point
└── index.css           # Global styles & Tailwind imports
```

## 🛠️ Tech Stack

- **React.js** - UI library with functional components
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **OpenWeatherMap API** - Weather data provider
- **Fetch API** - HTTP requests

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Dark Mode

The app is dark-mode ready. To enable dark mode, add the `dark` class to the `<html>` tag or use Tailwind's dark mode configuration.

### Styling

All styling is done with Tailwind CSS utility classes. Custom styles are minimal and only in `index.css` for global utilities.

## 🔧 API Configuration

The app uses OpenWeatherMap's free tier API which includes:
- Current weather data
- 5-day/3-hour forecast
- 60 calls/minute rate limit

For production use, consider upgrading to a paid plan for higher rate limits.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

If you encounter any issues:
1. Check that your API key is correctly set in `.env`
2. Ensure you have an active internet connection
3. Verify the city name is spelled correctly

---

Built with ❤️ using React and Tailwind CSS


