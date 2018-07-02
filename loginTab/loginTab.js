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
    const auth  = wx.getStorageSync("token");
    let title = "登录";
    if (auth!=""){
      title = "用户信息";
      const { name, phone } = JSON.parse(base64.decode(auth));
      this.setData({
        auth,
        userInfo:{
          name,
          phone
        }
      })
    }else{
      this.setData({
        auth:""
      })
    }
    wx.setNavigationBarTitle({
      title
    })
  },
  formSubmit(e){
    const {phone,pwd,name} = e.detail.value;
    if (name.trim()==""||phone.trim() == "" || pwd.trim()==""){
      wx.showModal({
        title:'提示',
        content: name.trim() == ""?"姓名不能为空":phone.trim() == ""?"手机号不能为空":"密码不能为空",
        showCancel:false
      })
    }else{
      let userInfo = {
        name: name.trim(),
        phone: phone.trim(),
        pwd: pwd.trim()
      }
      let token = JSON.stringify(userInfo);
      token = base64.encode(token);
      wx.setStorageSync("token",token);
      wx.navigateBack()
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