const base64 = require("../../utils/base.js").base64;

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    // 判断用户是否登入
    const auth = wx.getStorageSync("token"); 
    console.log(auth);
    if (auth==null||auth==""){
      this.setData({
        auth:""
      })
    }else{
      const { name, phone } = JSON.parse(base64.decode(auth));
      this.setData({
        userInfo:{
          name,
          phone
        },
        auth
      });
    }
  },
  login(){
    const auth = this.data.auth;
    wx.navigateTo({
      url: '../loginTab/loginTab?'
    })
  },
  loginout(){
    wx.removeStorageSync("token");
    this.setData({
      userInfo:{},
      auth: ""
    })
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