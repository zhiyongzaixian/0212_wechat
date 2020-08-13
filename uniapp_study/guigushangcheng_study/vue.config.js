module.exports = {
  devServer: {
    proxy: {
      '/api': { // 接头暗号
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: true,
				pathRewrite: { // 一旦接头成功，去掉暗号，否则服务器端不能正常响应
					'^/api': '' 
				}
      }
    }
  }
}