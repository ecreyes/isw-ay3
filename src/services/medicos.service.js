import axios from 'axios';

const API_URL = "https://isw-springboot-example-ecreyes.herokuapp.com/api"

const getMedicos = () => {
  let url = `${API_URL}/medicos`;
  return axios.get(url);
}

const medicosService = {
  getMedicos,
};

export default medicosService;