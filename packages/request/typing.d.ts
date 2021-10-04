export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

export interface ICustomValue {
	[prop: string]: any
}

export interface IRequestBaseConfig {
	/**
	 * 超时时间
	 */
	timeout?: number;
	/**
	 * 成功响应码
	 */
	successCode: number;
	/**
	 * 是否携带cookie
	 */
	withCredentials?: boolean;
	/**
	 * 响应类型
	 */
	responeseType?: ResponseType;
}

export interface IRequestConfig extends IRequestBaseConfig {
	/**
	 * get请求的参数
	 */
	params?: ICustomValue;
	/**
	 * post和put请求的参数
	 */
	data?: object;
	/**
	 * 请求头
	 */
	headers?: ICustomValue;
}

export interface IResponseConfig {
	/**
	 * 状态码
	 */
	status?: number;
	/**
	 * 接口返回信息
	 */
	message?: string;
	/**
	 * 响应状态码
	 */
	code?: number;
	/**
	 * 接口返回数据
	 */
	data?: ICustomValue;
	/**
	 * 分页数据
	 */
	count?: number;
}
