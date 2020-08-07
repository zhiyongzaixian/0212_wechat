import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoGroupList: [], // 视频导航标签数据
    navId: '', // 导航标识id,
    videoList: [], // 视频列表数据
    videoId: '', // 视频的vid
    videoUpdateTime: [], // 保存视频播放记录时间的数组
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
  
  // 点击视频播放/继续播放的回调
  handlePlay(event){
   //  console.log('play()');
    
    /*
    * 1. 问题： 多个video标签可以同时播放
    * 2. 解决思路：
    *   1) 点击播放新的视频的时候去关掉上一个视频
    *   2) 可以通过 wx.createVideoContext(vid)创建一个控制video标签的上下文对象
    *   3) 找到上一个视频的上下文对象?
    * 3. 新的api: wx.createVideoContext(vid)
    *
    *
    * */
    let {id} = event.currentTarget;
    
    // console.log(this.videoContext);
    /*
    * this.videoContext
    *   1) 第一次点击： undefined
    *   2) 再次点击: 上一次的上下文对象
    *
    * */
    // this.vid !== id && this.videoContext && this.videoContext.stop();
    // if(this.vid !== id){
    //   if(this.videoContext){
    //     this.videoContext.stop();
    //   }
    // }
    // this.vid = id;
    
    
    // 更新videoId的状态数据
    this.setData({
      videoId: id
    })
    // 创建一个video标签的上下文对象
    // 单例模式： 始终保持只有一个对象，当需要创建新的对象的时候会将原有的对象覆盖，使得原有的对象成为垃圾对象，被自动回收，节省内存空间
    
    this.videoContext = wx.createVideoContext(id);
    this.videoContext.play();
    // this.videoContext.stop(); // 停止视频
    
  },
  
  // 监听视频播放进度的回调
  handleTimeUpdate(event){
    console.log(event.detail.currentTime);
    console.log(event.currentTarget.id);
    let videoOjb = {vid: event.currentTarget.id,currentTime: event.detail.currentTime}
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
