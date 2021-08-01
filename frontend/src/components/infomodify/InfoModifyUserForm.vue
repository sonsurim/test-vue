<template>
  <div>
    <button @click="clearForm"> 폼 비우기 </button>
    <CommonDynamicFields
      v-for="(item,index) in userInfo"
      :key="index"
      :formData="item"
    />
  </div>
</template>

<script>
import CommonDynamicFields from '../common/CommonDynamicFiedls.vue'

export default {
  components: {
    CommonDynamicFields
  },
  data() {
    return {
      userInfo: {
        user_name: {
          name: 'user_name',
          title: '사용자 명',
          value: '슈퍼 쏜',
          template: 'infomodify/form/FormDefault'
        },
        user_job: {
          name: 'user_job',
          title: '직업',
          value: '개발자',
          template: 'infomodify/form/FormDefault'
        }
      }
    }
  },
  methods: {
    clearForm() {
      console.log(this.$.components);
    }
  }
}
</script>

<style>

</style>