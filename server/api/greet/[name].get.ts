export default defineEventHandler(({ context }) => {
  const {
    params: { name },
  } = context;

  return {
    message: `你好 ${name}，欢迎来宁皓网学习 Nuxt。`,
  };
});
