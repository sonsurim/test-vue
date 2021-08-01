<template>
  <button @click="postForm">전송</button>
</template>

<script>
export default {
  methods: {
    postForm() {
      alert(JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style>

</style>