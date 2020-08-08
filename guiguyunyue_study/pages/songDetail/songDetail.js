import PubSub from 'pubsub-js'
import request from '../../utils/request';

// 获取全局App实例
let appInstance = getApp();
// console.log(appInstance);
// appInstance.globalData.musicId = 123;
// console.log(appInstance);


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
    
    
    // 根据全局存储的状态判断当前页面的音乐是否在播放
    if(appInstance.globalData.isMusicPlay && appInstance.globalData.musicId === musicId){ // 当前页面音乐在播放
      this.setData({
        isPlay: true
      })
    }
    
    // 监听音乐播放/暂停/停止
    this.backgroundAudioManager = wx.getBackgroundAudioManager();
    this.backgroundAudioManager.onPlay(() => {
      // 修改全局播放的状态
      this.changeIsPlayState(true)
      appInstance.globalData.musicId = musicId;
    });
    this.backgroundAudioManager.onPause(() => {
      this.changeIsPlayState(false)
    });
    this.backgroundAudioManager.onStop(() => {
      this.changeIsPlayState(false)
    })
  },
  // 封装修改状态方法
  changeIsPlayState(isPlay){
    this.setData({
      isPlay
    })
    // 修改全局播放的状态
    appInstance.globalData.isMusicPlay = isPlay;
  },
  
  // 控制音乐播放/暂停的回调
  musicPlay(){
    let isPlay = !this.data.isPlay
    // 1. 修改播放状态
    // this.setData({
    //   isPlay
    // })
    
    // 2. 控制音乐播放
    let {musicId} = this.data;
    this.musicControl(isPlay, musicId);
  },

  
  // 封装控制音乐播放/暂停的功能函数
  async musicControl(isPlay, musicId){
    // console.log(isPlay);
  
    
    if(isPlay){ // 音乐播放
      // 1) 根据音乐id获取音乐链接
      let musicLinkData = await request('/song/url', {id: musicId})
      let musicLink = musicLinkData.data[0].url;
      this.setData({
        musicLink
      })
      // 2) 播放音乐 wx.getBackgroundAudioManager()
      this.backgroundAudioManager.src = musicLink;
      this.backgroundAudioManager.title = this.data.song.name;
      
     
    }else { // 音乐暂停
      this.backgroundAudioManager.pause();
     
      // appInstance.globalData.musicId = musicId;
    }
  },
  
  // 切换歌曲的回调
  switchMusic(event){
    let type = event.currentTarget.id;
    console.log(type);
    PubSub.publish('switchType', type)
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
