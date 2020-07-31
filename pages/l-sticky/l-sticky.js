Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {
    this.initSticky();
   },
  didUpdate() {
    this.initSticky();
  },
  onInit() {
    // this.initSticky();
  },
  didUnmount() { },
  methods: {
    initSticky() {
      this.updateStickyItemsSizeData();
    },
    updateStickyItemsSizeData() {
      // console.log(this, 'this');
      const { counter } = this.$page;
      // console.log(counter, 'this.$page');
      counter.forEach((stickyItemNode, index) => {
        stickyItemNode.updateStickyItemPosition(this.props.scrollTop);
        stickyItemNode.updateStickyItemBaseData(index);
      });
    }
  },
});
