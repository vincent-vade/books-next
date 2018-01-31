import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'http://fakerestapi.azurewebsites.net/api'
  });
}
