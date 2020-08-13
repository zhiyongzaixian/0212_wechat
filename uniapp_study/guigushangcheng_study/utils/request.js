import config from './config.js'
// 封装发送请求的方法
export default (url, data={}, method='GET') => {
	return new Promise((resolve, reject) => {
		uni.request({
			// url: url, // H5项目 跨域代理
			url: config.host + url, // 小程序
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