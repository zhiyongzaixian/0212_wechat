/*
* 登录流程:
*   1. 收集表单项内容
*   2. 前端验证
*     1) 利用正则验证用户输入的内容是否合法，是否符合当前项目的额规定
*     2) 前端验证不通过，直接提示用户重新输入，不需要发请求
*     3) 前端验证通过，发请求，进行后端验证
*   3. 后端验证
*     1) 在前端验证通过以后将收集的表单项数据发请求交由后端
*     2) 服务器验证当前用户的信息是否合法
*     3) 验证不管是否通过都会返回数据给前端
*
* */




Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '', // 手机号
    password: '', // 密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  // 表单项内容发生改变的事件
  handleInput(event){
    console.log(event);
    // 向事件对象event传参 id形式 适用于唯一的标识数据
    // let type = event.currentTarget.id;
    
    // data-key=value 适用于传多条数据
    let type = event.currentTarget.dataset.type;
    console.log(type);
    this.setData({
      [type]: event.detail.value
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
