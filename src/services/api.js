import axios from 'axios'
import NProgress from 'nprogress'
import router from '@/router'
import config from '../config'
import utils from '../utils'
// config axios
const instance = axios.create({
  baseURL: config.SERVER_URL + config.API_PATH
})
// NProgress loading
instance.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

// NProgress loading
instance.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  NProgress.done()
  return Promise.reject(error)
})

instance.interceptors.response.use(res => {
  NProgress.done()
  // transform data.code to number
  res.data.code = +res.data.code
  res.data.total = +res.data.total || 0

  if (res.data.code === 304) {
    router.push({
      path: '/auth',
      query: {
        to: utils.getTopPath(router.currentRoute)
      }
    })
  }
  // 转换分页信息
  if (res.data.page) {
    res.data.meta = {
      // page: +res.data.page, // in case of circle requests
      count: +res.data.count,
      total: +res.data.total
    }
  }
  if (res.data.code === 201) {
    res.data.meta = {
      total: 0
    }
  }
  return res
}, error => {
  NProgress.done()
  return Promise.reject(error)
})
export default instance
