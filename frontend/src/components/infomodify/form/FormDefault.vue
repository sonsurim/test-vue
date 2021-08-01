<template>
  <div>
    <p> (tr)  </p>
    <p>th: {{ title }}</p>
    <p>
      <input
        type="text"
        v-model="vmodelValue"
      />
    </p>
    <p> (/tr) </p>
    <hr>
  </div>
</template>

<script>
import infoModifyMixins from '../../../mixins/infoModifyMixins';

export default {
  mixins: [ infoModifyMixins ],
  data() {
    return {
      vmodelValue: ''
    }
  },
  created() {
    this.vmodelValue = this.formData.value ? this.formData.value : ''
  }
}
</script>

<style>

</style>