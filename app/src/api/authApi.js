import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;

const url =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? `http://192.168.1.2:3000`
    : `http://auth-api.todo.com`;

const instance = axios.create({
  baseURL: url,
});

export default instance;
