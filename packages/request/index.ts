import axios, { AxiosInstance } from 'axios'
import Interceptors from "./models/Interceptors"
import { IRequestConfig } from './typing'

const DEFAULT_TIMEOUT = 60000
class Request {
  
  private config: IRequestConfig

  private instance: AxiosInstance
  
  private interceptor

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
  get(url, params) {
    this.config.params = params || this.config.params || {}
    return this.instance.get(url, this.config)
  }

  /**
   * post请求
   * @param url 接口地址
   * @param data 请求参数
   */
  post(url, data) {
    this.config.data = data || this.config.data || {}
    return this.instance.post(url, this.config)
  } 
}

export default Request