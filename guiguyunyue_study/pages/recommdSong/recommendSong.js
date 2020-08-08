import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: '',
    month: '',
    recommendList: [], // 推荐列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    let userInfo = wx.getStorageSync('userInfo');
    // 判断用户是否登录
    if(!userInfo){
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        success: () => {
          // 跳转至登录界面
          wx.redirectTo({
            url: '/pages/login/login'
          })
        }
      });
    }
    // 动态修改日期状态数据
    this.setData({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1
    })
    
    // 获取用户的推荐歌曲列表
    let recommendListData = await request('/recommend/songs')
    this.setData({
      recommendList: recommendListData.recommend
    })
  },
  
  // 跳转至songDetail页面
  toSongDetail(event){
    // let song = event.currentTarget.id;
    let song = event.currentTarget.dataset.song;
    // 路由跳转传参： query形式
    // 不能直接通过query传递数据量较大的对象，url长度有限制，会导致传递的数据被截取
    wx.navigateTo({
      url: '/pages/songDetail/songDetail?id=' + song.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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
