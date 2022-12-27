<template>
  <div>
    <h1>用户登录</h1>
    <form @submit.prevent>
      <div>
        <input
          type="text"
          autocomplete="username"
          placeholder="名字"
          v-model="name"
        />
      </div>
      <div>
        <input
          type="password"
          autocomplete="current-password"
          placeholder="密码"
          v-model="password"
        />
      </div>
      <div>
        <button class="primary" @click="login">登录</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '登录',
});

const name = ref('');
const password = ref('');

const login = () => {
  console.log('name', name.value);
  console.log('password', password.value);
};
</script>
