const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    newPhone:'',
    pwd:'',
    pwdMessage:'',
    btnDisable:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  changePhoneNo(e){
    const { value } = e.detail;
    this.setData({
      newPhone: value
    })
  },
  changePwd(e) {
    const { value } = e.detail;
    this.setData({
      pwd: value
    })
  },
  savePhone(){
    wx.showLoading();
    wx.request({
      url: `${this.data.baseUrl}/users/login`,
      method:"POST",
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      data:{
        phone: this.data.newPhone,
        password: this.data.pwd
      },
      success:(res)=>{
        if(res.statusCode==200){
          const {roles} = res.data;
          this.setData({
            phone: this.data.newPhone
          })
          wx.setStorageSync("roles", roles);
        }
      },
      complete:()=>{
        wx.hideLoading();
      }
    })


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  // 获取动态密码
  getPwd(){
    wx.request({
      url: `${this.data.baseUrl}/logincode`,
      data:{
        phone:this.data.newPhone
      },
      success:res=>{
        if(res.statusCode==200){
          const { status_Code } = res.data
          if (status_Code==0){
            let time = 60;
            let cla = setInterval(()=>{
              console.log(time);
              this.setData({
                pwdMessage:`(剩余${time--}秒)`,
                btnDisable:true
              });
              if (time==0){
                this.setData({
                  pwdMessage: "",
                  btnDisable:false
                });
                clearTimeout(cla);
              }
            },1000)
          }
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      baseUrl: app.globalData.baseUrl
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