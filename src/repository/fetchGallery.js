import { apiKey } from "../api/config";
import Gallery from "../models/gallery";

const fetchGallery = async (query) => {
  try {
    const response = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&has_geo=1&extras=geo&format=json&nojsoncallback=1`);
    const data = await response.json();
    if (data.stat !== 'ok') return new Gallery([]);
 
    const {photo} = data.photos;

    return new Gallery(photo);
    
  } catch (e) {
    throw new Error('somenthing went wrong:', e);
  }
  
}

export default fetchGallery;