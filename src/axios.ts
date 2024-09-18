import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://aaaaaaaaa.com', // API 地址
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 添加 token 
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
