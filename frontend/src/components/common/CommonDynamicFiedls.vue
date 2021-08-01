<template>
  <div>
    <component :is="template" :formData="formData"/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'CommonDynamicFields',
  props: {
    formData: {
      type: Object,
      default: null
    }
  },
  computed: {
    template () {
      return defineAsyncComponent(() =>
        {
          if ( !this.formData.template ) {
            return import('./CommonFields.vue');
          } else {
            return import(`../${this.formData.template}`);
          }
        }
      )
    }
  }

}
</script>

<style>

</style>