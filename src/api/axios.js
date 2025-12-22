import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://openmind-api.vercel.app/21-1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
