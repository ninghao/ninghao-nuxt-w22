export default defineEventHandler((event) => {
  return {
    message: `您好 ~ ${event.context.user.name}`,
  };
});
