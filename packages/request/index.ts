import axios, { AxiosInstance } from 'axios'
import Interceptors from './models/Interceptors'
import { IRequestConfig, RequestInterceptors } from './types'

const DEFAULT_TIMEOUT = 60000
class Request {
  config: IRequestConfig

  instance: AxiosInstance

  interceptor: RequestInterceptors

  constructor(config) {
    this.config = config
    const { timeout, withCredentials } = this.config
    const instance = axios.create({
      timeout: timeout || DEFAULT_TIMEOUT,
      withCredentials: withCredentials
    })
    this.instance = instance
    this.interceptor = new Interceptors(this.config, instance)
  }

  /**
   * get请求
   * @param url 接口地址
   * @param params 请求参数
   */
  get(url, params, customConfig) {
    customConfig = customConfig || {}
    customConfig.params = params || customConfig.params || {}
    return this.instance.get(url, customConfig)
  }

  /**
   * post请求
   * @param url 接口地址
   * @param data 请求参数
   */
  post(url, data, customConfig) {
    customConfig = customConfig || {}
    return this.instance.post(url, data, customConfig)
  }
}

export default Request
