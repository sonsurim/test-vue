<template>
  <div>
    <h3>{{ title }}</h3>
    <button @click="toggleModal"> 비밀번호 변경 </button>
    <hr>
    <div
      v-show="modalShow"
      class="vue-pwd-modal">
      Modal 입니다
    </div>
  </div>
</template>

<script>
import infoModifyMixins from '../../../mixins/infoModifyMixins';

export default {
  mixins: [ infoModifyMixins ],
  data() {
    return {
      modalShow: false
    }
  },
  methods: {
    toggleModal() {
      this.modalShow = !this.modalShow;
    }
  }
}
</script>

<style scoped>
.vue-pwd-modal {
  position: fixed;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  background: #fff;
}
</style>