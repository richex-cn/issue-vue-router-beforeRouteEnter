<template>
  <h1>ID: {{ $route.params.id }}</h1>
  <router-link to="/">back</router-link>
</template>

<script lang="ts">
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export default {
  setup() {
    const now = Date.now()
    return { now }
  },

  beforeRouteEnter: (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    console.log('home beforeRouteEnter')
    next(vm => {
      // @ts-ignore
      console.log('vm.now', vm.now) // 1649654568794
    })
  }
}
</script>
