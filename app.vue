<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  titleTemplate(title) {
    return title ? `${title} - 宁皓网` : '宁皓网';
  },
});
</script>
