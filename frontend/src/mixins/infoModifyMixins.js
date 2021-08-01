import { useStore } from 'vuex';
import emitter from '../utils/emmiter';

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
  methods: {
    clearForm() {
      this.vmodelValue = '';
      this.zipCode = '';
      this.address1 = '';
      this.address2 = '';
    }
  },
  created() {
    const store = useStore();
    const convertedData = JSON.parse(JSON.stringify(this.formData));

    this.title = this.formData.title ? this.formData.title : '타이틀';

    if ( !convertedData['child'] ) {
      // 자식이 없는 경우
      store.commit('UPDATE_INFO', {
        key: convertedData['name'],
        value: convertedData['value'] ? convertedData['value'] : ''
      });
    } else {
      const child = convertedData['child'];
      // 자식이 있는 경우
      for ( let item in child ) {
        store.commit('UPDATE_INFO', {
          key: item,
          value: child[item]['value'] ? child[item]['value'] : ''
        });
      }
    }

    emitter.on('update:clear-form', this.clearForm);
  },
  beforeUnMounted() {
    emitter.off('update:clear-form');
  }
}