// pages/consign/consign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0, //当前tab页index
    wait:{
      load:false, //是否已经加载过数据
      page:0,  //当前加载第几页数据 
      list:[] //具体数据项
    },
    transportation:{
      load:false,
      page:0,
      list:[]
    },
    complte:{
      load:false,
      page:0,
      list:[]
    }
  },
  changTab:function(e){
    const tab = e.target.dataset["tab"];
    if(tab!=undefined){
      this.setData({
        currentTab:tab
      })
    }
  },
  swiperChange:function(e){
    const tab = e.detail.current;
    const source = e.detail.source;
    if (source=="touch"){
      this.setData({
        currentTab: tab
      })
    } 
  },
  /**
   * 加载数据 tab区分加载项
   */
  loadData:function(tab){
    
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