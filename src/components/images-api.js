
import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImages = async ( query, currentPage) => {
  const response = await axios.get('/search/photos', {
    params: {
      query:  query,
      page: currentPage,
      per_page: 12,
      client_id: 'Rh6Xv5HI-zfS2bHmKByQrvtE6pCTL4etJM6aiD5yaxA',
    },
  });
  return response.data;
};


