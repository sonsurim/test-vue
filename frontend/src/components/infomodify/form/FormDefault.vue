<template>
  <div>
    <h3>{{ title }}</h3>
    <p>
      <input
        type="text"
        v-model="vmodelValue"
      />
    </p>
  </div>
</template>

<script>
import infoModifyMixins from '../../../mixins/infoModifyMixins';

export default {
  mixins: [ infoModifyMixins ],
  computed: {
    vmodelValue: {
      get () {
        return this.$store.state.userInfo[this.formData.name]
      },
      set (value) {
        return this.$store.commit('UPDATE_INFO', {
          key: this.formData.name,
          value
        })
      }
    }
  },
  created() {
    this.vmodelValue = this.formData.value ? this.formData.value : '';
  }
}
</script>

<style>

</style>