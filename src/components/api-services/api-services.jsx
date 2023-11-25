import axios from 'axios';

const API_KEY = '39819981-fb7a960ba48529567676f3c81';

const fetchImagesFromBackend = async (searchTerm, page, perPage) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchTerm}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    );

    if (!response.data) {
      throw new Error('No data received from the backend');
    }

    return response.data.hits.map(hit => ({
      id: hit.id,
      webformatURL: hit.webformatURL,
      largeImageURL: hit.largeImageURL,
    }));
  } catch (error) {
    console.error('Error fetching images from Pixabay API:', error);
    throw error;
  }
};

export default fetchImagesFromBackend;
