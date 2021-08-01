<template>
  <div>
    <InfoModifyUserFormVue/>
    <InfoModifyCompanyFormVue/>
    <InfoModifyFormVue/>
  </div>
</template>

<script>
import InfoModifyUserFormVue from '../components/infomodify/InfoModifyUserForm.vue'
import InfoModifyCompanyFormVue from '../components/infomodify/InfoModifyCompanyForm.vue'
import InfoModifyFormVue from '../components/infomodify/InfoModifyForm.vue'

export default {
  components: {
    InfoModifyUserFormVue,
    InfoModifyCompanyFormVue,
    InfoModifyFormVue
  }
}
</script>

<style>

</style>