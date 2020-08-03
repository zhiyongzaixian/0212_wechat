// pages/index/index.js
// 注册页面
Page({

  /**
   * 页面的初始数据
   */

  /*

  
  */
  data: {
    msg: '初始化测试数据',
    userInfo: {}, // 用户基本信息
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('index onload()') 
    // 小程序环境中全局对象是wx，浏览器环境中全局对象是window
    console.log(window);
    // 修改状态数据： this.setData()
    // this页面实例 Page实例
    setTimeout(() => {
      this.setData({
        msg: '修改之后的数据'
      })
      console.log(this.data.msg)
    }, 2000)

    // 获取用户信息，授权之后
    wx.getUserInfo({
      success: (res) => {
        console.log('获取成功， ', res)
        // 更新userInfo的状态
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: () => {
        console.log('获取失败')
      }
    })
  },
  hanldeParent(){
    console.log('parent');
  },
  handleChild(){
    console.log('child');
  },
  // 路由跳转
  toLogs(){
    // 保留当前页面
    // wx.navigateTo({
    //   url: '/pages/logs/logs',
    // })
    // 关闭当前页面，跳转至某个页面
    wx.redirectTo({
      url: '/pages/logs/logs',
    })
  },

  // 获取用户信息的回调
  hanldeGetUserInfo(res){
    console.log(res)
    if(res.detail.userInfo){
      // 允许
      // 更新userInfo的状态数据
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('index onReady()') 

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(' index  onShow()');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log(' index  onHide()');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('index  onUnload()');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})