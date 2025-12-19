import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://openmind-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 사용법
 * 바로 아래의 메소드만 입력해서 변수로 받는다.
 * try catch 는 해당 페이지에서 처리 한다.
  try {
    const responseData = await get('/products', {
      {
        ...
      },
    });
  } catch (error) {
    console.error(error);
  }
*/

export const get = (url, config) =>
  api.get(url, config).then((res) => res.data);

export const post = (url, data, config) =>
  api.post(url, data, config).then((res) => res.data);
