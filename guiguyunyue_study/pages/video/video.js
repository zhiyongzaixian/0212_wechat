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
    // 获取导航标签数据
    let videoGroupListData = await request('/video/group/list')
    this.setData({
      videoGroupList: videoGroupListData.data.slice(0, 14),
      navId: videoGroupListData.data[0].id
    })
    
    
    // 获取导航标签下对应的视频列表数据
    let videoListData = await request('/video/group', {id: this.data.navId});
    let index = 0;
    videoListData.datas.forEach(item => item.id = index++);
    this.setData({
      videoList: videoListData.datas
    })
  },
  
  // 导航点击的回调
  changeNavId(event){
    // console.log(typeof event.currentTarget.id);
    this.setData({
      navId: event.currentTarget.id>>>0
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
