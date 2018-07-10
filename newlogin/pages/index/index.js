//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    phone:"",
    login:false
  },
  onShow: function () {
    this.setData({
      login: false
    })
  },
  // 跳转到绑定手机页面
  login(){
    if (!this.data.login){
      this.setData({
        login:true
      })
      wx.navigateTo({
        url: '../login/login',
      })
    }
   
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
    
  },
  getUserInfo: function(e) {}

})
