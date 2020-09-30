<template>
  <div class="root">
    <h1>Tenancy {{ tenancyId }}</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'TenancyOverview' }">
          Overview
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'lt_start' }">
          Terminate lease
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'TenancyView',

  props: {
    tenancyId: [String, Number]
  }
}
</script>