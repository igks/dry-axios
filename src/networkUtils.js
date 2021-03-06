import axios from 'axios';
import {errorHandler} from './errorHandler';

const SERVER_DOMAIN = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create ({
  baseURL : SERVER_DOMAIN,
  headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await Session.getValue("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

const getData = async (path) =>{
  try {
    const response = await axiosInstance.get(path);
    return response.data
  } catch (error) {
    return errorHandler(error);
  }
  // return new Promise ((resolve, reject) => {
  //   try {
  //     const res
  //   } catch (error) {
      
  //   }
  //   axiosInstance.get(path)
  //    .then(response => resolve(response))
  //    .catch(error => reject(errorHandler(error)));
  // });
}

const postData = async (path, data) => {
  try {
    const response = await axiosInstance.post(path, data);
    return response.data
  } catch (error) {
    return errorHandler(error);
  }
};

const putData = async (path, data) => {
  try {
    const response = await axiosInstance.put(path, data);
    return response.data
  } catch (error) {
    return errorHandler(error);
  }
};

const deleteData = async (path) => {
  try {
    await axiosInstance.delete(path);
    return {
      status: 200
    }
  } catch (error) {
    return errorHandler(error);
  }
};

export {getData as get, postData as post, putData as put, deleteData as delete};
