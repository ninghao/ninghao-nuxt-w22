<template>
  <form @submit.prevent>
    <div>
      <input type="text" placeholder="标题" v-model="title" />
    </div>
    <div>
      <textarea placeholder="正文" v-model="content"></textarea>
    </div>
    <div>
      <button class="primary" @click="editPost">更新</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { Post } from '~/types/post.type';

useHead({ title: '编辑内容' });

const title = ref('');
const content = ref('');

const {
  params: { id },
} = useRoute();

const router = useRouter();

const { data: post } = await useApiFetch<Post>(`posts/${id}`);

if (post.value) {
  title.value = post.value.title;
  content.value = post.value.content;
}

watch(post, (current) => {
  title.value = current?.title!;
  content.value = current?.content!;
});

const editPost = async () => {
  const { data } = await useApiFetch(`posts/${id}`, {
    method: 'PATCH',
    body: {
      title: title.value,
      content: content.value,
    },
  });

  if (data.value) {
    router.push('/posts');
  }
};
</script>
