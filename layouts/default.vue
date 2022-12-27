<template>
  <div class="app">
    <header>
      <div>
        <span>🌲</span> <NuxtLink to="/">{{ name }}</NuxtLink>
      </div>
      <nav>
        <div>
          <NuxtLink to="/about">关于</NuxtLink>
        </div>
        <div>
          <NuxtLink to="/posts">内容</NuxtLink>
        </div>
      </nav>
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
