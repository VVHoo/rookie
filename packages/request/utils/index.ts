/**
 * 是否对象
 */
export const isPlainObject = (value) => {
	return Object.prototype.toString.call(value) === '[object Object]'
}
