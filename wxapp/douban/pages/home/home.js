// pages/home/home.js
var service = require('../../service/douban/douban.js'),
  utils = require('../../common/utils/utils.js'),
  _fn;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:{},
    tabs:{
      currentIndex:0,
      list:[{
        text:'正在热映',
        type:'1'
      },
      {
        text:'即将上映',
        type:'2'
      }]
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //进入便选择第一项
    _fn.selectTab.call(this,0);
  },



  changeTab:function(e){
    var target = e.target;
    console.log(target.dataid);
    //选中不同项
    //_fn.selectTab.call(this,target.dataset.index);
  },


  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {

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

  },
});


_fn = {
  selectTab:function(index){
    var self = this ,
      tabs = self.data.tabs;

    if(index==undefined){
      index=1;
    }

    //切换状态
    self.setData({
      'tabs.currentIndex' :index,

    });
    utils.showLoading();
    //获取数据
    service.getMovieList(tabs.list[index].type,function(data){
      utils/wx.hideLoading();
      //渲染页面
      _fn.renderList.call(self,data);
    });
  },
  renderList: function (data) {
    data = data || listData;
    //可能会对数据进行处理
    this.setData({
      movies:data
    });
  }
}