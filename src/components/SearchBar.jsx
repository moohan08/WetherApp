import { useState } from 'react';

/**
 * SearchBar Component
 * Handles city search input and submission
 * @param {Function} onSearch - Callback function called when search is submitted
 */
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a city..."
            className="w-full px-6 py-4 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-white/30 focus:shadow-lg focus:shadow-white/20 transition-all duration-300 text-lg"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70">
            🔍
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transform hover:-translate-y-0.5"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

