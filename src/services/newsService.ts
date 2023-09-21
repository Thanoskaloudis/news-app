import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export const fetchNewsData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.articles;
  } catch (error) {
    throw new Error('Error fetching news data');
  }
};
