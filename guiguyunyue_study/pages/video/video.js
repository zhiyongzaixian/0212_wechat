import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 视频导航标签数据
    navId: '', // 导航标识id,
    videoList: [], // 视频列表数据
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 判断用户是否登录,如果没有登录，引导用户先登录
    if(!wx.getStorageSync('userInfo')){
      wx.showToast({
        title: '请先登录',
        icon: 'none',
        success: () => {
          // 跳转至登录界面
          wx.redirectTo({
            url: '/pages/login/login'
          })
        }
      })
      
      return;
    }
    
    
    // 获取导航标签数据
    let videoGroupListData = await request('/video/group/list')
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    
    
    // 获取导航标签下对应的视频列表数据
    // let videoListData = await request('/video/group', {id: this.data.navId});
    // let index = 0;
    // videoListData.datas.forEach(item => item.id = index++);
    // this.setData({
    //   videoList: videoListData.datas
    // })
    this.getVideoList(this.data.navId);
  },
  
  // 封装获取视频列表数据的方法
  async getVideoList(navId){
    // 获取导航标签下对应的视频列表数据
    let videoListData = await request('/video/group', {id: navId});
    let index = 0;
    videoListData.datas.forEach(item => item.id = index++);
    // 关闭消息提示框
    wx.hideLoading();
    
    this.setData({
      videoList: videoListData.datas
    })
  },
  // 导航点击的回调
  async changeNavId(event){
    // console.log(typeof event.currentTarget.id);
    this.setData({
      navId: event.currentTarget.dataset.id>>>0,
      videoList: [],
    })
    // 显示正在加载的消息提示框
    wx.showLoading({
      title: '正在加载'
    });
    
    // 根据当前的视频标签id获取对应的视频列表数据
    this.getVideoList(this.data.navId);
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
