<template>
  <div>
    <h1>内容列表</h1>
    <div v-if="pending">加载中...</div>
    <div v-if="posts !== null">
      <div v-for="post in posts" :key="post.id">
        <div>{{ post.content }}</div>
        <div>
          - <small>{{ post.user.name }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {
  data: posts,
  pending,
  refresh,
  error,
} = await useAsyncData(
  'posts',
  () => $fetch('https://nid-node.ninghao.co/posts'),
  { lazy: true },
);
</script>
