<template>
  <div>
    <h3>{{ title }}</h3>
    <p>
      <InfoModifyInput
        :name="zipCode.name"
        :value="zipCode.value"
      />
    </p>
    <p>
      <InfoModifyInput
        :name="address1.name"
        :value="address1.value"
      />
    </p>
    <p>
      <InfoModifyInput
        :name="address2.name"
        :value="address2.value"
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
  computed: {
    zipCode() {
      return this.formData.child['zipCode']
    },
    address1() {
      return this.formData.child['address1']
    },
    address2() {
      return this.formData.child['address2']
    }
  },
  created() {
    console.log(this.formData.child);
  }
}
</script>

<style>

</style>