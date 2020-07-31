import { getNodeRectFromComponent, timeout } from '../utils'
Component({
  mixins: [],
  data: {
    /**
  * 显示模式
  */
    mode: undefined,
    /**
     * 当前sticky-item的索引值
     */
    index: undefined,

    /**
     * sticky-item是否固定到页面顶部
     */
    isFixedTop: false,

    /**
     * sticky-item组件距离页面顶部的高度
     */
    stickyItemTop: 0,

    /**
     * sticky-item组件自身的高度
     */
    stickyItemHeight: 0,

    /**
     * sticky-item组件包装高度
     */
    stickyItemWrapperHeight: undefined,
    menuFixed: false
  },
  props: {
    top: 0
  },
  didMount() {
    setTimeout(() => {
      const { c } = this.$page;
      const { props: { mode } } = c;
      this.setData({ mode });
    }, 500);
  },
  didUpdate() {
    // console.log('didUpdate');
  },
  didUnmount() { },
  methods: {
    updateStickyItemPosition(scrollTop) {
          //  const parent = this.getParentComponent();
          const {top} = this.props;
      const {index, stickyItemTop, stickyItemHeight } = this.data;
      console.log(scrollTop, 'scrollTop');
       console.log(stickyItemTop, 'stickyItemTop');
        console.log(top, 'top');
        console.log(stickyItemHeight, 'stickyItemHeight');
      const isFixedTop = scrollTop > stickyItemTop - top && scrollTop < stickyItemHeight + stickyItemTop - top;

      // 避免频繁setData
      if (this.data.isFixedTop === isFixedTop) {
        return;
      }

      // if (isFixedTop) {
      //   // 触发吸附事件
      //   parent.triggerEvent('linsticky', {index});
      // } else {
      //   // 触发脱落事件
      //   parent.triggerEvent('linunsticky', {index});
      // }

      this.setData({isFixedTop});
      // console.log(scrollTop, 'scrollTop');
    },
    async updateStickyItemBaseData(index) {
      this.setData(index);
      const { c } = this.$page;
      // console.log(222)
      // if(!c) return;
      // scrollTop = !scrollTop || 0;

      const { props: { scrollTop = 0 } = {} } = c || {};
      // console.log(scrollTop, 'scrollTop');
      //      my.createSelectorQuery().select('.l-sticky-item').boundingClientRect(res => {
      //   // resolve(res);
      //   console.log(res, 'res');
      // }).exec();

      const res = await getNodeRectFromComponent('.l-sticky-item');
      const stickyItemNodeRect = res[index];

      // my.createSelectorQuery().selectAll('.l-sticky-item')
      //   .boundingClientRect((res) => {
      //     console.log(res, 'res');
      //     // resolve(res);
      //   }).exec();

      // const ret = await getNodeRectFromComponent('.l-sticky-item');
      // console.log(ret, 'ret');
      //  const stickyItemNodeRect = await nodeUtil.getNodeRectFromComponent(this,'.l-sticky-item');
      this.setData({
        stickyItemTop: stickyItemNodeRect.top + scrollTop,
        stickyItemHeight: stickyItemNodeRect.height
      });

      // // 设置sticky-item-header外层容器高度
      const res1 = await getNodeRectFromComponent('.l-sticky-item-header');
      const stickyItemHeaderNodeRect = res1[index];
      // const stickyItemNodeRect = res[index];
      // const stickyItemHeaderNodeRect = await nodeUtil.getNodeRectFromComponent(this,'.l-sticky-item-header');
      this.setData({
        stickyItemWrapperHeight: stickyItemHeaderNodeRect.height
      });
    }
  },


});
