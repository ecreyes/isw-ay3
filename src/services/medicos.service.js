import axios from 'axios';

const API_URL = "http://localhost:8080/api"

const getMedicos = () => {
  let url = `${API_URL}/medicos`;
  return axios.get(url);
}

const medicosService = {
  getMedicos,
};

export default medicosService;