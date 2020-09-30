<template>
  <div style="background-color: salmon;">
    <h1>Lease Termination</h1>

    <router-view
      :tenancyId="tenancyId"
      :routeNamePrefix="routeNamePrefix"
      :vuexModuleName="vuexModuleName"
    />
  </div>
</template>

<script>
export default {
  name: 'MainView',

  props: {
    tenancyId: [String, Number],
    routeNamePrefix: String,
    vuexModuleName: String,
  },
}
</script>