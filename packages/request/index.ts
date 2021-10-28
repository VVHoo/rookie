import axios, { AxiosInstance } from 'axios'
import Interceptors from './models/Interceptors'
import { IRequestConfig, RequestInterceptors } from './types'

const DEFAULT_TIMEOUT = 60000
class Request {
  config: IRequestConfig

  instance: AxiosInstance

  interceptor: RequestInterceptors

  constructor(config: IRequestConfig) {
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
   * @param customConfig 自定义配置
   */
  get(url: string, params?: any | undefined, customConfig?: any | undefined) {
    customConfig = customConfig || {}
    customConfig.params = params || customConfig.params || {}
    return this.instance.get(url, customConfig)
  }

  /**
   * post请求
   * @param url 接口地址
   * @param data 请求参数
   * @param customConfig 自定义配置
   */
  post(url: string, data?: any | undefined, customConfig?: any | undefined) {
    customConfig = customConfig || {}
    return this.instance.post(url, data, customConfig)
  }

  /**
   * put请求
   * @param url 接口地址
   * @param data 请求参数
   * @param customConfig 自定义配置
   */
  put(url: string, data?: any | undefined, customConfig?: any | undefined) {
    customConfig = customConfig || {}
    return this.instance.put(url, data, customConfig)
  }
}

export default Request
