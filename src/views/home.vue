<template>
  <h1>Home</h1>
  <router-link to="88">without &lt;script setup&gt;</router-link>
</template>

<script lang="ts">
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export default {
  beforeRouteEnter: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    console.log('home beforeRouteEnter')
    next(vm => {
      // @ts-ignore
      console.log('vm.now', vm.now) // undefined
      vm.$nextTick(() => {
        // @ts-ignore
        console.log('vm.now', vm.now) // undefined
      })
      vm.$nextTick(function () {
        console.log(this === vm) // false
        // @ts-ignore
        console.log('this.now', this.now) // 1649657580119
        // @ts-ignore
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
