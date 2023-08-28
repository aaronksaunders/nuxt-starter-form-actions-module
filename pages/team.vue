<template>
  <div>
    <NuxtLink to="/team">TEAM</NuxtLink>
    <p>PATH - {{ $router.currentRoute.value.fullPath }}</p>
    <p>
      <NuxtLink to="/team/players/aaron">
        <p>PLAYERS - DYNAMIC ROUTE - Aaron</p>
      </NuxtLink>
      <NuxtLink to="/team/players/alice">
        <p>PLAYERS - DYNAMIC ROUTE - Alice</p>
      </NuxtLink>
    </p>
    <NuxtPage />
  </div>
</template>
