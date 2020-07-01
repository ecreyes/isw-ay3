import axios from 'axios';

const API_URL = "https://spring-post-new-isw.herokuapp.com/api"

const getMedicos = () => {
  let url = `${API_URL}/medicos`;
  return axios.get(url);
}

const medicosService = {
  getMedicos,
};

export default medicosService;