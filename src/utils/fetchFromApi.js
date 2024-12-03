import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params:{
        maxResult:'50'
    },
    headers:{
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host':'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,
        options
    );
    return data;
}