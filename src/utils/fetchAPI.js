import axios from "axios";

const ENV_KEY_API = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
   method: 'GET',
   url: BASE_URL,
   params: {
      part: 'id,snippet',  
      maxResults: '4',
      regionCode: 'ID',
      order: 'date',
   },
   headers: {
      'X-RapidAPI-Key': ENV_KEY_API,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
   }
};

const fetchAPI = async (url) => {
   try {
      const { data } = await axios.get(`${BASE_URL}/${url}`, options)
      return data
   } catch(err) {
      console.log(err.message)
   }
}

export default fetchAPI 