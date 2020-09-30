<template>
  <div class="root">
    <h2>Start</h2>
    <router-link :to="{
      name: routeNamePrefix + 'middle'
    }">
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'StartView',

  props: {
    tenancyId: [String, Number],
    routeNamePrefix: String,
    vuexModuleName: String,
  },
}
</script>