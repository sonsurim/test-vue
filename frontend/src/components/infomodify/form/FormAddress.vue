<template>
  <div>
    <h3>{{ title }}</h3>
    <p>
      <input
        type="text"
        v-model="zipCode"
      />
    </p>
    <p>
      <input
        type="text"
        v-model="address1"
      />
    </p>
    <p>
      <input
        type="text"
        v-model="address2"
      />
    </p>
  </div>
</template>

<script>
import infoModifyMixins from '../../../mixins/infoModifyMixins';

export default {
  mixins: [ infoModifyMixins ],
  computed: {
    zipCode: {
      get () {
        return this.$store.state.userInfo['zipCode']
      },
      set (value) {
        return this.$store.commit('UPDATE_INFO', {
          key: 'zipCode',
          value
        })
      }
    },
    address1: {
      get () {
        return this.$store.state.userInfo['address1']
      },
      set (value) {
        return this.$store.commit('UPDATE_INFO', {
          key: 'address1',
          value
        })
      }
    },
    address2: {
      get () {
        return this.$store.state.userInfo['address2']
      },
      set (value) {
        return this.$store.commit('UPDATE_INFO', {
          key: 'address2',
          value
        })
      }
    }
  }
}
</script>

<style>

</style>