<template>
  <div>
    <h1>内容列表</h1>
    <div v-for="post in posts" :key="post.id">
      <div>{{ post.content }}</div>
      <div>
        - <small>{{ post.user.name }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = await $fetch('https://nid-node.ninghao.co/posts');
console.log(posts);
</script>
