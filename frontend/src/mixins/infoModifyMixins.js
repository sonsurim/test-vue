export default {
  props: {
    formData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      title: ''
    }
  },
  created() {
    this.title = this.formData.title ? this.formData.title : '타이틀';
  },
}