var handle,
  URL,
  LISTTYPE,
  _fn;

URL = {
  //列表
  movieList:'https://app-ok.com/douban.php?list=',
  //详情
  movieDetail:'https://app-ok.com/douban.php?id=',
}

//列表类型
LISTTYPE = {
  //正在
  1:'in_theaters',
  //即将
  2:'coming_soon'
}

handle = {
  //获取列表
  getMovieList:function(type,callback){
    var url = URL.movieList + LISTTYPE[type];
    _fn.getData({
      url:url
    },callback);
  },

  //获取详情
  getMovieDetail:function(id,callback){
    var url = URL.movieDetail + '/' + id;
    _fn.getData({
      url:url
    },callback);
  }

}

_fn = {
  //请求网络接口
  getData:function(param,callback){
    wx.request({
      url: param.url,
      method:'get',
      data:{
        apikey:''
      },
      header:{
        'Content-Type':'application/json'
      },
      success:function(e){
        callback(e.data);
      },
      fail:function(e){
        callback();
      }
    })
  }
}

module.exports = handle;