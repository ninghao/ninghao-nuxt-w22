<template>
  <NuxtPage />
</template>

<script setup lang="ts">
const { name } = useAppConfig();

useHead({
  titleTemplate(title) {
    return title ? `${title} - ${name}` : name;
  },
});
</script>
