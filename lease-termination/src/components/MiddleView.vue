<template>
  <div class="root">
    <h2>Middle</h2>
    <p>
      {{stateValue}}
    </p>
    <router-link :to="{
      name: routeNamePrefix + 'end'
    }">
      Next
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MiddleView',

  props: {
    tenancyId: [String, Number],
    routeNamePrefix: String,
    vuexModuleName: String,
  },

  computed: {
    stateValue() {
      return this.$store.state[this.vuexModuleName].someText;
    }
  }
}
</script>