export const useApiFetch = () => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  console.log(apiBaseUrl);
};
