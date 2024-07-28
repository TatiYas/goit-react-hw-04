import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = 'Rh6Xv5HI-zfS2bHmKByQrvtE6pCTL4etJM6aiD5yaxA';

async function fetchImages(searchQuery, page) {
    const response = await axios.get('/search/images', {
        params: {
            client_id: ACCESS_KEY,
            query: searchQuery,
            page,
        },
    });
    return response.data.results;
}
export default fetchImages;