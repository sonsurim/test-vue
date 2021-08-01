<template>
  <input
    v-model="inputValue"
    :name="name"
    type="text"
  />
</template>

<script>
import emitter from '../../utils/emmiter';

export default {
  props: {
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  computed: {
    inputValue: {
      get () {
        return this.$store.state.userInfo[this.name]
      },
      set (value) {
        return this.$store.commit('UPDATE_INFO', { key: this.name, value })
      }
    }
  },
  methods: {
    clearForm() {
      this.inputValue = '';
    }
  },
  created(){
    this.inputValue = this.value ? this.value : '';
    emitter.on('update:clear-form', this.clearForm);
  },
  beforeUnMounted() {
    emitter.off('update:clear-form');
  }
}
</script>

<style>

</style>