<template>
  <div class="app">
    <header>
      <div><span>🌲</span> {{ name }}</div>
      <nav></nav>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
const { name } = useAppConfig();
</script>

<style>
@import '~/assets/styles/default.css';
</style>
