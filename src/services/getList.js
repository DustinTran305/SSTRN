import { END_POINTS } from 'constants/apiUrl';
import axios from 'axios';

export function getAllNotificationsNew() {
  return axios({
      method: 'get',
      url: 'https://reqres.in/api/users?page=1',
  })
}

