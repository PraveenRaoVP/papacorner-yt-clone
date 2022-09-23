//import 
import axios from 'axios';

// base/url
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

//config 
const options = {
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YTAPI_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


// get dynamic url req from api
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`,options);
  return data;
}

// export fetchFromAPI
export default fetchFromAPI;