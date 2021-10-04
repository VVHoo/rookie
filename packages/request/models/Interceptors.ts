import { AxiosInstance, AxiosResponse } from 'axios'
import { IRequestConfig } from '../typing'
import { isPlainObject } from '../utils'

class Interceptors {
  private instance: AxiosInstance
  private globalRequestConfig: IRequestConfig

  constructor(config, instance: AxiosInstance) {
    this.instance = instance
    this.globalRequestConfig = config
    this.init()
  }
  init() {
    const _this = this
    /**请求拦截器 */
    this.instance.interceptors.request.use(
      config => {
        console.log(this)
        if (
          _this.globalRequestConfig.headers &&
          isPlainObject(_this.globalRequestConfig.headers)
        ) {
          const customHeaders = this.globalRequestConfig.headers || {}
          config.headers = Object.assign(config.headers, customHeaders)
          Object.keys(config.headers).forEach((key: string | undefined) => {
            if (
              config.headers[key] === undefined ||
              config.headers[key] === null
            ) {
              delete config.headers[key]
            }
          })
        }
      },
      error => {
        return Promise.reject(error)
      }
    )

    /**响应拦截器 */
    this.instance.interceptors.response.use((res: AxiosResponse) => {
			// TODO
      // if (
      //   _this.globalResponseConfig &&
      //   isPlainObject(_this.globalResponseConfig)
      // ) {
      // }
      return Promise.resolve(res.data)
    })
  }
}

export default Interceptors