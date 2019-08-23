import axios from 'axios';
import store from 'store';
import NProgress from 'nprogress';

const service = axios.create({
  baseURL: '', // api 的 base_url
  withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
service.interceptors.request.use((config) => {
  NProgress.start();
  let token = store.get('token') || '';
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
}, (error) => {
  NProgress.done();
  return Promise.reject(error);
});
service.interceptors.response.use((resp) => {
  NProgress.done();
  return resp;
}, (error) => {
  NProgress.done();
  return Promise.reject(error);
});

export default service;