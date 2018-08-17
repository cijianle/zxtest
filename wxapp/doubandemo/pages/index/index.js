// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color:['red','blue','yellow','green','orange'],
    scrollToView:'item-3',
    scrollTop:0,
    textContent:'我是内容\n我也是内容\n\t我还是内容',
    radios:[
      { value: '1', text: '选项1', checked: false },
      { value: '2', text: '选项2', checked: true },
      { value: '3', text: '选项3', checked: false },
      { value: '4', text: '选项4', checked: false },
    ],
    checkboxs:[
      { name: '中国', value: '1' },
      { name: '美国', value: '2' ,checked:true},
      { name: '日本', value: '3' ,display:true},
      { name: '韩国', value: '4' },
      { name: '俄罗斯', value: '5',checked:true },
    ],
    switchList:[
      {
        name:"switch1",
        checked:'false',
        type:'switch',
        changeEventName:'changeSwitch'
      },
      {
        name: "switch2",
        checked: 'true',
        type: 'checkbox',
        changeEventName: 'changeSwitch'
      }
    ],
    icon:{
      size:20,
      opacity:8
    },
    pickerList:[
      '选项1',
      '选项2',
      '选项3'
    ],
    pickerSelectedIndex:0,

    pickerStartTime:"00:00",
    pickerEndTime:"24:00",
    pickerSelectTime:"11:30",

    pickerStartDate:"2016-02-01",
    pickerEndDate:"2016-12-30",
    pickerSelectDate:"2016-10-10",

    query:{}

  },


  formsubmit:function(e){
    console.log(e.detail.value);
  },

  formreset: function (e) {
    console.log('已经重置对象');
  },

  textareaGetValue:function(e){
    console.log(e.detail.value);
  },

  inputChangeValue1:function(e){
    console.log(e.detail);
    var value = e.detail.value,
      pos = e.detail.cursor,
      left;
    //计算光标位置
    if(pos!=-1){
      //光标在中间位置
      left = value.slice(0,pos);
      //修改后光标位置要随之变化
      pos = left.replace(/123/g,'1').length;
    }
    return {
      value : e.detail.value.replace(/123/g,'1'),
      cursor:pos
    }
  },
  inputChangeValue2: function (e) {
    if(e.detail.value.length>=3){
      //关闭键盘
      wx.hideKeyboard();
    }
  },

  pickerDateChange: function (e) {
    this.setData({
      pickerSelectDate: e.detail.value
    })
  },

  pickerTimeChange:function(e){
    this.setData({
      pickerSelectTime:e.detail.value
    })
  },

  pickerChange:function(e){
    //修改picker选项
    this.setData({
      pickerSelectedIndex:e.detail.value
    });

  },


  iconChangeSize: function (e) {
    this.data.icon.size =e.detail.value;
    this.setData(this.data);
  },

  iconChangeOpacity:function(e){
    this.data.icon.opacity = e.detail.value;
    this.setData(this.data);
  },

  changeSwitch:function(e){
    console.log(e);
    var name = e.currentTarget.id,
      switchs = this.data.switchList,
      i,s;
    for(i=0;s=switchs[i];i++){
      if(s.name==name){
        s.checked= e.detail.value;
        break;
      }
    }
    console.log(name+'选中状态：'+e.detail.value);
  },

  checkboxChange:function(e){
    console.log('选中是：'+e.detail.value);
  },

  radioChangeChoosed:function(event){
    console.log('你选中了：'+event.detail.value);
  },

  scrollToTop:function(){
    this.setData({
      scrollTop:0
    })
  },

  scrollToLower:function(){
    console.log('到底部');
  },

  scrollToUpper: function () {
    console.log('到顶部');
  },

  scroll:function(){
    console.log('开始滚动');
  },












  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log(options);
    this.data.query = options;
    this.setData(this.data);

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