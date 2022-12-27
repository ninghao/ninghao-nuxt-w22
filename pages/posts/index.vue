<template>
  <div>
    <h1>内容列表</h1>
    <div>
      <button @click="backward">上一页</button>
      <button @click="forward">下一页</button>
    </div>
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
const page = ref(1);

const backward = () => {
  page.value--;
  refresh();
};

const forward = () => {
  page.value++;
  refresh();
};

const {
  data: posts,
  pending,
  refresh,
  error,
} = await useFetch(
  () => `https://nid-node.ninghao.co/posts?page=${page.value}`,
);

useApiFetch();
</script>
