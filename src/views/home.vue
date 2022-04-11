<template>
  <h1>Home</h1>
  <router-link to="88">without &lt;script setup&gt;</router-link>
</template>

<script lang="ts">
export default {
  beforeRouteEnter: (to, from, next) => {
    console.log('home beforeRouteEnter')
    next(vm => {
      console.log('vm.now', vm.now) // undefined
      vm.$nextTick(() => {
        console.log('vm.now', vm.now) // undefined
      })
      vm.$nextTick(function () {
        console.log(this === vm) // false
        console.log('this.now', this.now) // 1649657580119
        console.log('this.getName', this.getName) // () => "Vue"
      })
    })
  }
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

console.log('home setup')

const now = ref(Date.now())
const getName = () => 'Vue'
</script>

<style></style>
