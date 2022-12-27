export const useApiFetch = <T>(api: string | (() => string)) => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  return useFetch<T>(api, {
    baseURL: apiBaseUrl,
  });
};
