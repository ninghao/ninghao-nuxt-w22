<template>
  <div>
    <h1>内容编辑 {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
const {
  params: { id },
} = useRoute();
</script>
