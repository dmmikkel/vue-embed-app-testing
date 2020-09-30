<template>
  <div class="root">
    <h2>End</h2>
  </div>
</template>

<script>
export default {
  name: 'EndView',

  props: {
    tenancyId: [String, Number],
    routeNamePrefix: String,
    vuexModuleName: String,
  },
}
</script>