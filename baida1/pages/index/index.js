// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: {
      pageone: [{
        name: "美食",
        src: "/pages/images/1.png"
      }, {
        name: "甜点饮品",
        src: "/pages/images/2.png"
      }, {
        name: "美团超市",
        src: "/pages/images/3.png"
      }, {
        name: "正餐精选",
        src: "/pages/images/4.png"
      }, {
        name: "生鲜果蔬",
        src: "/pages/images/5.png"
      }, {
        name: "全部商家",
        src: "/pages/images/6.png"
      }, {
        name: "免配送费",
        src: "/pages/images/7.png"
      }, {
        name: "新商家",
        src: "/pages/images/8.png"
      }],
      pagetwo: [{
        name: "美食",
        src: "/pages/images/1.png"
      }, {
        name: "甜点饮品",
        src: "/pages/images/2.png"
      }, {
        name: "美团超市",
        src: "/pages/images/3.png"
      }, {
        name: "正餐精选",
        src: "/pages/images/4.png"
      }, {
        name: "生鲜果蔬",
        src: "/pages/images/5.png"
      }, {
        name: "全部商家",
        src: "/pages/images/6.png"
      }, {
        name: "免配送费",
        src: "/pages/images/7.png"
      }, {
        name: "新商家",
        src: "/pages/images/8.png"
      }]
    },
    sortList: [{
      sort: "综合排序",
      image: "",
    }, {
      sort: "速度最快",
      image: "",
    }, {
      sort: "评分最高",
      image: "",
    }, {
      sort: "起送价最低",
      image: "",
    }, {
      sort: "配送费最低",
      image: "",
    }],
    characteristicList: [{
      text: "免配送费"
    }, {
      text: "0元起送"
    }, {
      text: "新商家"
    }, {
      text: "品牌商家"
    }, {
      text: "跨天预定"
    }],
    discountList: [{
      icon: "减",
      iconColor: "#FF635B",
      text: "满减优惠"
    }, {
      icon: "领",
      iconColor: "#FF7298",
      text: "进店领券"
    }, {
      icon: "返",
      iconColor: "#FB4343",
      text: "满返代金券"
    }, {
      icon: "折",
      iconColor: "#C183E2",
      text: "折扣商品"
    }, {
      icon: "订",
      iconColor: "#6FDF64",
      text: "提前下单优惠"
    }, {
      icon: "赠",
      iconColor: "#FDC41E",
      text: "满赠活动"
    }, {
      icon: "免",
      iconColor: "#43B697",
      text: "满免配送"
    }],
    shangdian:[
      {name:'一品香餐厅',src:'/pages/images/food.jpg',sale:'1375',style:'中式简餐',price:10,auto:15},
      { name: '稻未(梦立方右街店)', src: '/pages/images/food.jpg', sale: '135', style: '西式快餐',price: 10, auto: 15},
      { name: '汉乐鸡', src: '/pages/images/food.jpg', sale: '975', style: '中式简餐', price: 10, auto: 15},
      { name: '麦得豪', src: '/pages/images/food.jpg', sale: '1355', style: '中式简餐', price: 10, auto: 15},
      { name: '忘不了音乐餐厅', src: '/pages/images/food.jpg', sale: '875', style: '中式简餐', price: 10, auto: 15},
      ],
   selected:0,
   sortSelected:"综合排序",
   characteristicSelected:[false,false,false,false,false,false],
   selectedNumb:0,
    mask1Hidden: true,
   mask2Hidden: true,
   discountSelected:null
  },
  clearSelectedNumb:function(){
      this.setData({
        characteristicSelected: [false],
        discountSelected: null,
        selectedNumb: 0
      })
  },
  //商家特色true加1，catchtap去除冒泡
  characteristicSelected: function (e) {
    var info=this.data.characteristicSelected;
    info[e.currentTarget.dataset.index]=!info[e.currentTarget.dataset.index];
    this.setData({
      characteristicSelected:info,
      selectedNumb:this.data.selectedNumb+(info[e.currentTarget.dataset.index]?1:-1)
    })
  },
  discountSelected: function (e) {
    if (this.data.discountSelected != e.currentTarget.dataset.index) {
      this.setData({
        discountSelected: e.currentTarget.dataset.index,
        selectedNumb: this.data.selectedNumb + (this.data.discountSelected == null ? 1 : 0)
      })
    } else {
      this.setData({
        discountSelected: null,//点两下减一
        selectedNumb: this.data.selectedNumb - 1
      })
    }
  },

  //弹出以后点任何一个地方都隐藏
  mask1Cancel: function () {
    this.setData({
      mask1Hidden: true
    })
  },
  mask2Cancel: function () {
    this.setData({
      mask2Hidden: true
    })
  },
  //模板图片底下
  onOverallTag: function () {
    this.setData({
      mask1Hidden: false
    })
  },
  //模板图片底下
  onFilter:function(){
      this.setData({
        mask2Hidden:false
      })
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