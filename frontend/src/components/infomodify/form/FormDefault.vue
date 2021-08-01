<template>
  <div>
    <h3>{{ title }}</h3>
    <p>
      <InfoModifyInput
        :name="formData.name"
        :value="formData.value"
      />
    </p>
  </div>
</template>

<script>
import InfoModifyInput from '../InfoModifyInput';
import infoModifyMixins from '../../../mixins/infoModifyMixins';

export default {
  components: { InfoModifyInput },
  mixins: [ infoModifyMixins ],
}
</script>

<style>

</style>