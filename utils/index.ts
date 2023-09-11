import axios from 'axios';

const options = {
  method: 'GET',
  url: process.env.REACT_APP_API_BASE_URL,
  params: { model: 'Ferrari' },
  'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
};

export const fetchCars = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
