// pages/lostthing/index.js
//暂定将标签第一个设置为大致地址，详细地址将进行隐瞒
//使用函数直接插入地址
var app = getApp();
var startX, endX; //首先创建2个变量 来记录触摸时的原点
var moveFlag = true; // 判断执行滑动事件
var concat = function (str1, str2) {
    return str1 + str2;
  }
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top_using_res: wx.getMenuButtonBoundingClientRect(),
    windowInfo: wx.getWindowInfo(),
    navH: 0,
    height: '',
    heights: [],
    owner_Data: {
      owner_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
    },
    //post0为捡到物品
    post0: [],
    //post1为丢失物品，其中lostthing_class = 1
    post1: [{
        blogger_id: 9, //文章所属id
        blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
        blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
        blogger_name: "xhiming", //博主昵称
        blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
        lostthing_topic: "700出2巴拉拉一只", //标题
        lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
        lostthing_class: "1", //发布类别（不需要可以不填充
        lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
        lostthing_space: "南海校区", //
        lostthing_space_detail: "G253与G252之间的交界处",
        lostthing_contact: "12312311231",
        photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
        readingtimes: 49, //阅读次数
        comments: 5, //评论数量
        favour: 20, //点赞数量
        had_favour: 0, //点赞判断
        favour_src: "/assets/images/icon/unfavour.png", //点赞图标
      },
      {
        blogger_id: 8, //文章所属id
        blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
        blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
        blogger_name: "zhiming", //博主昵称
        blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
        lostthing_topic: "巴拉拉一22222", //标题
        lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
        lostthing_class: "1", //发布类别（不需要可以不填充
        lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
        lostthing_space: "南海校区", //
        lostthing_space_detail: "G253与G252之间的交界处",
        lostthing_contact: "12312311231",
        photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
        readingtimes: 49, //阅读次数
        comments: 5, //评论数量
        favour: 20000, //点赞数量
        had_favour: 0, //点赞判断
        favour_src: "/assets/images/icon/unfavour.png", //点赞图标
      },
      {
        blogger_id: 7, //文章所属id
        blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
        blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
        blogger_name: "zhiming", //博主昵称
        blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
        lostthing_topic: "巴拉拉一22222", //标题
        lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
        lostthing_class: "1", //发布类别（不需要可以不填充
        lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
        lostthing_space: "南海校区", //
        lostthing_space_detail: "G253与G252之间的交界处",
        lostthing_contact: "12312311231",
        photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
        readingtimes: 49, //阅读次数
        comments: 5, //评论数量
        favour: 20000, //点赞数量
        had_favour: 0, //点赞判断
        favour_src: "/assets/images/icon/unfavour.png", //点赞图标
      },
      {
        blogger_id: 6, //文章所属id
        blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
        blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
        blogger_name: "zhiming", //博主昵称
        blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
        lostthing_topic: "巴拉拉一22222", //标题
        lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
        lostthing_class: "1", //发布类别（不需要可以不填充
        lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
        lostthing_space: "南海校区", //
        lostthing_space_detail: "G253与G252之间的交界处",
        lostthing_contact: "12312311231",
        photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
        readingtimes: 49, //阅读次数
        comments: 5, //评论数量
        favour: 20000, //点赞数量
        had_favour: 0, //点赞判断
        favour_src: "/assets/images/icon/unfavour.png", //点赞图标
      },
      {
        blogger_id: 5, //文章所属id
        blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
        blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
        blogger_name: "zhiming", //博主昵称
        blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
        lostthing_topic: "巴拉拉一22222", //标题
        lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
        lostthing_class: "1", //发布类别（不需要可以不填充
        lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
        lostthing_space: "南海校区", //
        lostthing_space_detail: "G253与G252之间的交界处",
        lostthing_contact: "12312311231",
        photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
        readingtimes: 49, //阅读次数
        comments: 5, //评论数量
        favour: 20000, //点赞数量
        had_favour: 0, //点赞判断
        favour_src: "/assets/images/icon/unfavour.png", //点赞图标
      },
      {
        blogger_id: 4, //文章所属id
        blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
        blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
        blogger_name: "zhiming", //博主昵称
        blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
        lostthing_topic: "巴拉拉一22222", //标题
        lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
        lostthing_class: "1", //发布类别（不需要可以不填充
        lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
        lostthing_space: "南海校区", //
        lostthing_space_detail: "G253与G252之间的交界处",
        lostthing_contact: "12312311231",
        photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
        readingtimes: 49, //阅读次数
        comments: 5, //评论数量
        favour: 20000, //点赞数量
        had_favour: 0, //点赞判断
        favour_src: "/assets/images/icon/unfavour.png", //点赞图标
      },
      {
        blogger_id: 3, //文章所属id
        blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
        blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
        blogger_name: "zhiming", //博主昵称
        blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
        lostthing_topic: "巴拉拉一22222", //标题
        lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
        lostthing_class: "1", //发布类别（不需要可以不填充
        lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
        lostthing_space: "南海校区", //
        lostthing_space_detail: "G253与G252之间的交界处",
        lostthing_contact: "12312311231",
        photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
        readingtimes: 49, //阅读次数
        comments: 5, //评论数量
        favour: 20000, //点赞数量
        had_favour: 0, //点赞判断
        favour_src: "/assets/images/icon/unfavour.png", //点赞图标
      },
      {
        blogger_id: 1, //文章所属id
        blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
        blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
        blogger_name: "zhiming", //博主昵称
        blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
        lostthing_topic: "巴拉拉一22222", //标题
        lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
        lostthing_class: "1", //发布类别（不需要可以不填充
        lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
        lostthing_space: "南海校区", //
        lostthing_space_detail: "G253与G252之间的交界处",
        lostthing_contact: "12312311231",
        photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
        readingtimes: 49, //阅读次数
        comments: 5, //评论数量
        favour: 20000, //点赞数量
        had_favour: 0, //点赞判断
        favour_src: "/assets/images/icon/unfavour.png", //点赞图标
      },
    ],
    //postowner为私人发布内容，根据时间排序
    postOwner: [
        {
            blogger_id: 10, //文章所属id
            blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
            blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
            blogger_name: "xhiming", //博主昵称
            blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
            lostthing_topic: "700出巴拉拉一只22222", //标题
            lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
            lostthing_class: "0", //发布类别（不需要可以不填充
            lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
            lostthing_space: "南海校区", //
            lostthing_space_detail: "G253与G252之间的交界处",
            lostthing_contact: "12312311231",
            photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
            readingtimes: 49, //阅读次数
            comments: 5, //评论数量
            favour: 20, //点赞数量
            had_favour: 0, //点赞判断
            favour_src: "/assets/images/icon/unfavour.png", //点赞图标
          },
          {
            blogger_id: 9, //文章所属id
            blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
            blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
            blogger_name: "xhiming", //博主昵称
            blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
            lostthing_topic: "700出2巴拉拉一只", //标题
            lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
            lostthing_class: "1", //发布类别（不需要可以不填充
            lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
            lostthing_space: "南海校区", //
            lostthing_space_detail: "G253与G252之间的交界处",
            lostthing_contact: "12312311231",
            photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
            readingtimes: 49, //阅读次数
            comments: 5, //评论数量
            favour: 20, //点赞数量
            had_favour: 0, //点赞判断
            favour_src: "/assets/images/icon/unfavour.png", //点赞图标
          },
          {
            blogger_id: 8, //文章所属id
            blogger_Openid: "ouctO4ypxLjQ_3t67gYI-urvPoQs",
            blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
            blogger_name: "zhiming", //博主昵称
            blogger_time: "2022年9月20日", //发布时间的时间戳、这里需要修改
            lostthing_topic: "巴拉拉一22222", //标题
            lostthing_time: "2022年9月20日", //丢失时间的时间戳、这里需要修改
            lostthing_class: "1", //发布类别（不需要可以不填充
            lostthing_detail: "我在南海这里丢失了一块抹茶拿铁，你们可以帮我寻找一下遗失的红色精灵吗", //主要内容
            lostthing_space: "南海校区", //
            lostthing_space_detail: "G253与G252之间的交界处",
            lostthing_contact: "12312311231",
            photos: ["https://s1.328888.xyz/2022/08/29/CzMYU.png", "https://s1.328888.xyz/2022/08/29/CzgoR.png", "https://s1.328888.xyz/2022/08/29/Czf0B.png"], //放置于主要内容下方的图片
            readingtimes: 49, //阅读次数
            comments: 5, //评论数量
            favour: 20000, //点赞数量
            had_favour: 0, //点赞判断
            favour_src: "/assets/images/icon/unfavour.png", //点赞图标
          },
    ],
    //页面切换相关数据
    current_Page: 0,
  },
  jumpToSearch: function () {
    wx.navigateTo({
      url: '/pages/lostthing/search',
    })
    //点击搜索跳转
  },

  //跳转至详情页面
  jumptodetails: function (e) {
    console.log(e);
    var that = this
    let index = e.currentTarget.dataset.index
    console.log("index值为"+index)
    //滑动以后判断当前页面是什么的辨识
    console.log('current_page(判断当前是哪种类型)为'+that.data.current_Page)
    //这里需要拼接字符串post(0/1)
    if(that.data.current_Page==0){
    var postValue = that.data.post0[index]
    }else if(that.data.current_Page==1)
        var postValue = that.data.post1[index]
        //通过if判断现在是post0还是post1
    console.log(postValue)
    wx.setStorage({
      key: "sendPostValue",
      data: postValue
    })
    wx.navigateTo({
      url: '/pages/lostthing/details',
    })
  },

  //点赞功能
  favourMe: function (e) {
    //返回commentid数据，再根据commentid能否访问/具体数字来判断点赞操作
    var that = this
    console.log(e);
    let blogger_id = e.currentTarget.dataset.id - 1; //帖子ID
    let lostthingClass = e.currentTarget.dataset.class;
    let index = e.currentTarget.dataset.index;
    if (lostthingClass == 0)//
    if (['this.data.post'+lostthingClass+'['+index+'].had_favour'] == 0) {
      console.log(1)
      this.setData({
        ['post[' + blogger_id + '].favour']: that.data.post[blogger_id].favour + 1,
        ['post[' + blogger_id + '].favour_src']: "/assets/images/icon/favour.png",
        ['post[' + blogger_id + '].had_favour']: 1
      })
    } else {
      this.setData({
        ['post[' + blogger_id + '].favour']: that.data.post[blogger_id].favour - 1,
        ['post[' + blogger_id + '].favour_src']: "/assets/images/icon/unfavour.png",
        ['post[' + blogger_id + '].had_favour']: 0
      })
    }
  },

  //触底刷新功能
  onReachBottom: function () {
    this.setData({
      curPage: this.data.curPage + 1
    });
    this.getGoodsList(0, true)
  },
  onPullDownRefresh: function () {
    this.setData({
      curPage: 1
    });
    this.getGoodsList(0)
    wx.stopPullDownRefresh()
  },

  // 滑动判断
  changeswiper: function (e) {
    var _this = this;
    console.log(e.detail.current)
    setTimeout(function () { //异步
      var query = wx.createSelectorQuery(); //模仿dom获取组件的高度
      query.selectAll('.list').boundingClientRect()
      query.exec((res) => {
        console.log(res)
        var listHeight = res[0][e.detail.current].height
        console.log(res[0][e.detail.current].height)
        _this.setData({
          height: listHeight + 20 + 'px'
        })
      })
    }, 100)
  },

  // 点击标签判断
  clicktab: function (e) {
    var pag = e.currentTarget.dataset.current;
    console.log("点击标签的数据为"+e.currentTarget.dataset.current)
    this.setData({
      current_Page: pag
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this
    setTimeout(function () { //异步
      var query = wx.createSelectorQuery();
      query.selectAll('.list').boundingClientRect()
      query.exec((res) => {
        console.log(res)
        var listHeight = res[0][0].height
        console.log(res[0][0].height)
        _this.setData({
          heights: res[0],
          height: listHeight + 40 + 'px'
        })
      })
    }, 100)
    this.setData({
      navH: app.globalData.navHeight
    });
    //onload的时候需要从服务器获取数据
    wx.request({
        url: 'https://www.scnusay.cc/lostdetail/lostdetailphoto/getdetail.php',
          method:"GET",
          data:{
          },
          header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'  
          },
          success(res) {
              console.log(res.data);
              for (var i = 0; i < res.data.length; i++) 
              {
                  //for是根据数据的长度插入新数组
                  //nwearray是用于插入的数组
                  var newarray = {
                      blogger_id:res.data[i].id,
                      blogger_Openid: res.data[i].openid,
                      blogger_avatar: "https://s1.328888.xyz/2022/08/02/OF8Ay.jpg", //头像
                      blogger_name: "xhiming", //博主昵称
                      //以上未返回
                      blogger_time: res.data[i].blogger_time, //发布时间的时间戳、这里需要修改
                      lostthing_topic: res.data[i].lostthing_topic, //标题
                      lostthing_time: res.data[i].lostthing_time, //丢失时间的时间戳、这里需要修改
                      lostthing_class: res.data[i].lostthing_class, //发布类别（不需要可以不填充
                      lostthing_detail: res.data[i].lostthing_detail, //主要内容
                      lostthing_space: res.data[i].lostthing_space, //
                      lostthing_space_detail: res.data[i].lostthing_space_detail,
                      lostthing_contact: res.data[i].lostthing_contact,
                      photos: [res.data[i].photo1, res.data[i].photo2,res.data[i].photo3], //放置于主要内容下方的图片
                      readingtimes: res.data[i].readingtimes, //阅读次数
                      comments: 5, //评论数量
                      favour: res.data[i].favour, //点赞数量
                      had_favour: 0, //点赞判断
                  }
                  _this.setData({
                      post0: _this.data.post0.concat(newarray),
                      //将数组插入post0
                  })
              }
          }
      })
  },
  logo: function (e) {
    //跳转去首页
    wx.navigateTo({
         url: '/pages/index/index',
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

})