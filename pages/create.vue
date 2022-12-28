<template>
  <form @submit.prevent>
    <div>
      <button
        class="bordered"
        @click="($refs.fileInput as HTMLInputElement).click()"
      >
        选择图像文件
      </button>
      <input
        type="file"
        hidden
        accept="image/png, image/jpeg, image/jpg"
        ref="fileInput"
        @change="onChangeFile"
      />
    </div>
    <div>
      <input type="text" placeholder="标题" v-model="title" />
    </div>
    <div>
      <textarea placeholder="正文" v-model="content"></textarea>
    </div>
    <div>
      <button class="primary" @click="createPost">发布</button>
    </div>
  </form>
</template>

<script setup lang="ts">
useHead({ title: '创建内容' });

const title = ref('');
const content = ref('');
const file = ref<File>();

const onChangeFile = (event: Event) => {
  const { files } = event.target as HTMLInputElement;

  if (files) {
    file.value = files[0];
  }

  console.log(file.value);
};

const createPost = async () => {
  const { data } = await useApiFetch('posts', {
    method: 'POST',
    body: {
      title: title.value,
      content: content.value,
    },
  });

  if (data.value) {
    title.value = '';
    content.value = '';
  }
};
</script>
