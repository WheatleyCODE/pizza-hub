import axios from 'axios';

export default axios.create({
  baseURL: 'https://qb-pizza-hub-default-rtdb.firebaseio.com/',
});
