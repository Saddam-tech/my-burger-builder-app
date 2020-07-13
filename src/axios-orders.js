import axios from 'axios';

const instance = axios.create({   
    baseURL: 'https://react-my-burger-5be15.firebaseio.com/'
});

export default instance;