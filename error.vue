<template>
  <NuxtLayout>
    <div>
      <Head>
        <Title>{{ error?.statusCode }}</Title>
      </Head>
      <h1>{{ error?.statusCode }}</h1>
      <div style="margin-bottom: 8px; font-weight: bold">
        {{ error?.message ? error.message : error?.statusMessage }}
      </div>
      <button @click="clearError({ redirect: '/' })">返回首页</button>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});
</script>
