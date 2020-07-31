Page({
  data: {
    scrollTop: 0,
    addresses: [
      {
        index: 'A',
        items: [
          '阿坝',
          '阿克苏',
          '阿拉尔',
          '阿拉善盟',
          '阿勒泰',
          '阿里',
          '安康',
          '安庆',
          '鞍山',
          '安阳',
          '澳门',
        ]
      },
      {
        index: 'B',
        items: [
          '百色',
          '白沙',
          '白山',
          '白银',
          '蚌埠',
          '保定',
          '宝鸡',
          '宝山',
          '保亭',
          '包头',
          '坝上',
          '巴彦淖尔',
          '巴音郭楞',
          '巴中',
          '北海',
          '北疆',
        ]
      },
      {
        index: 'C',
        items: [
          '沧州',
          '长白山',
          '长春',
          '常德',
          '昌都',
          '昌吉',
          '昌江',
          '长江三峡',
          '长沙',
          '长治',
          '常州',
          '巢湖',
          '朝阳',
          '潮州',
          '常德',
          '成都',
          '澄迈',
          '郴州',
          '赤峰',
          '池州',
          '重庆',
          '楚雄州',
        ]
      }
    ],
  },
  open() {
    console.log(this.counter, 'this.counter');
  },
  onReady() {
    // my.createSelectorQuery()
    //   .select('.aaa').exec((ret) => {
    //     console.log(JSON.stringify(ret, null, 2));
    //   });
  },
  saveRef(ref) {
	// 存储自定义组件实例，方便以后调用
    this.counter = this.counter || [] ;
    this.counter.push(ref);
  },
  savefref(ref) {
	// 存储自定义组件实例，方便以后调用
    this.c = ref;
  },
  onPageScroll(e) {
    this.setData({
      scrollTop: e.scrollTop
    });
    // console.log(e.scrollTop, 'res');
    // console.log(this.counter, 'this.counter');
    // console.log(this, 'this');
    // var that = this;
    // // 3.当页面滚动距离scrollTop > 菜单栏距离文档顶部的距离时，菜单栏固定定位
    // console.log(e.scrollTop, 'e.scrollTop');
    // if (e.scrollTop > 500) {
    //   that.setData({
    //     menuFixed: true
    //   })
    // } else {
    //   that.setData({
    //     menuFixed: false
    //   })
    // }
  },
});
