import request from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: false, // 标识音乐是否播放，默认为未播放
    song: {}, // 音乐详情
    musicId: '', // 音乐id
    musicLink: '', // 音乐链接
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // options是专门用于接收路由跳转传参的对象
    let musicId = options.id;
    
    // 根据音乐的id获取对应的音乐详情
    let songData = await request('/song/detail', {ids: musicId})
    this.setData({
      song: songData.songs[0],
      musicId
    })
    // 动态设置窗口标题
    wx.setNavigationBarTitle({
      title: this.data.song.name
    })
  },
  
  // 控制音乐播放/暂停的回调
  musicPlay(){
    let isPlay = !this.data.isPlay
    // 1. 修改播放状态
    this.setData({
      isPlay
    })
    
    // 2. 控制音乐播放
    let {musicId} = this.data;
    this.musicControl(isPlay, musicId);
  },

  
  // 封装控制音乐播放/暂停的功能函数
  async musicControl(isPlay, musicId){
    // console.log(isPlay);
  
    let backgroundAudioManager = wx.getBackgroundAudioManager();
    if(isPlay){ // 音乐播放
      // 1) 根据音乐id获取音乐链接
      let musicLinkData = await request('/song/url', {id: musicId})
      let musicLink = musicLinkData.data[0].url;
      this.setData({
        musicLink
      })
      
      // 2) 播放音乐 wx.getBackgroundAudioManager()
      backgroundAudioManager.src = musicLink;
      backgroundAudioManager.title = this.data.song.name;
    }else { // 音乐暂停
      backgroundAudioManager.pause();
    }
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
