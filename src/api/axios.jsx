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
 * 
 * get 사용시, params 사용 O, config 가 두번째 인자
  try {
    const responseData = await get('/products', {
      params: {
        ...
      },
    });
  } catch (error) {
    console.error(error);
  }

* post 사용시, params 사용 X, data 가 두번째 인자
  try {
    const responseData = await post('/products', {
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

export const put = (url, data, config) =>
  api.put(url, data, config).then((res) => res.data);

export const patch = (url, data, config) =>
  api.patch(url, data, config).then((res) => res.data);

export const del = (url, config) =>
  api.delete(url, config).then((res) => res.data);
