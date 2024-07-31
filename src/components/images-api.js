
import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImages = async ( query, currentPage) => { 
  try{
  const response = await axios.get('/search/photos', 
    {
    params: {
      query:  query,
      page: currentPage,
      per_page: 6,
      client_id: 'Rh6Xv5HI-zfS2bHmKByQrvtE6pCTL4etJM6aiD5yaxA',
    },
  });
  return response.data;
} 
catch (error) {
  console.error("Error fetching images:", error);
  throw error;
}
};


