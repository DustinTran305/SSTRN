import { END_POINTS } from 'constants/apiUrl';
import axios from 'axios';

export function loginApi(obj) {
  return axios({
      method: 'post',
      url: 'https://reqres.in/api/login',
      data: obj
  })
}
