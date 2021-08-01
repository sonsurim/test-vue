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
import emitter from '../../utils/emmiter';
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
        },
        user_Address: {
          name: 'user_address',
          title: '주소',
          value: '',
          child: {
            zipCode: {
              name: 'zipCode',
              value: '07123'
            },
            address1: {
              name: 'address1',
              value: '서울시 둥땅구 동장이'
            },
            address2: {
              name: 'address2',
              value: '몇동 몇호 입니다'
            }
          },
          template: 'infomodify/form/FormAddress'
        }
      }
    }
  },
  methods: {
    clearForm() {
      emitter.emit('update:clear-form');
    }
  }
}
</script>

<style>

</style>