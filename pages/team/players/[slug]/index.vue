<script setup lang="ts">
const { result } = await useLoader('players');

</script>

<template>
  <div style="border: solid grey .1em; margin 16px; padding : 16px">
    PLAYER DATA ==>
    <pre>{{ result }}</pre>
    <NuxtLink to="/team">BACK</NuxtLink>
  </div>

</template>
