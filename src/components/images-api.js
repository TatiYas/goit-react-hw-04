
import axios from "axios";

const ACCESS_KEY = "Rh6Xv5HI-zfS2bHmKByQrvtE6pCTL4etJM6aiD5yaxA";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImagesWithName = async (name, page = 1, perPage = 10) => {
  try {
    const response = await axios.get("/search/photos", {
      params: {
        query: name,
        page: page,
        per_page: perPage,
        client_id: ACCESS_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};




