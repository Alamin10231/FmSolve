// src/features/asksam/query.js
import axios from "axios";

/**
 * Fetch AskSam suggestions from backend using GET method.
 * @param {string} query - The search query string
 * @returns {Promise<Array>} - Array of suggestion objects from backend
 */
export const fetchAskSamSuggestions = async (query) => {
  if (!query) return [];
  try {
    const res = await axios.get(
      `/asksam/search/?q=${encodeURIComponent(query)}`,
      console.log(res.data)
    );
    return Array.isArray(res.data) ? res.data : [];
  } catch (err) {
    console.log(err)
    return [];
  }
};

// Example usage:
// const suggestions = await fetchAskSamSuggestions('engineer');
