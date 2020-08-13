import config from './config.js'
// 封装发送请求的方法
export default (url, data={}, method='GET') => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: config.host + url,
			data,
			method,
			success: (res) => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			}
		});
	})
}