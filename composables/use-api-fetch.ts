export const useApiFetch = (api: string | (() => string)) => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  return useFetch(api, {
    baseURL: apiBaseUrl,
  });
};
