import axios from 'axios';

const DEV_CONFIG = {
	baseURL: 'http://localhost:3001/api/',
}

const PROD_CONFIG = {
	baseURL: 'https://2023-cohort-projects-production.up.railway.app/api/'
}

const config = process.env.NODE_ENV === 'development' ? DEV_CONFIG : PROD_CONFIG;
export default axios.create(config);
