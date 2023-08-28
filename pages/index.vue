<script setup lang="ts">
const { result } = await useLoader('index');
console.log(result);
</script>

<template>
  <div style="border: solid grey .1em; margin 16px; padding : 16px">
    INDEX DATA ==>
    <pre>{{ result }}</pre>
  <NuxtPage />

    <NuxtLink to="/team">
      <p>TEAM - NORMAL ROUTE</p>
    </NuxtLink>
    <NuxtLink to="/">
      <p>HOME</p>
    </NuxtLink>
  </div>
</template>
