<template>
  <div>
    <h1>内容页面 {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
const {
  params: { id },
} = useRoute();
</script>
