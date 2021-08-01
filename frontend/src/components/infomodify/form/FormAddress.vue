<template>
  <div>
    Form Address
  </div>
</template>

<script>
import infoModifyMixins from '../../../mixins/infoModifyMixins';

export default {
  mixins: [ infoModifyMixins ],
  created() {
    console.log(this.formData);
  }
}
</script>

<style>

</style>