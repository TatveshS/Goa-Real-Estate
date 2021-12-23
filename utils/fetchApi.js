import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '7e9be9d86dmshee0c720a4574817p13dc6ajsnaccc2fe597f8' ,
    },
  });
    
  return data;
}