type UseApiFetchOptions = {
  method?: string;
  body?: Record<string, any>;
};

export const useApiFetch = <T>(
  api: string | (() => string),
  options: UseApiFetchOptions,
) => {
  const {
    public: { apiBaseUrl },
  } = useRuntimeConfig();

  return useFetch<T>(api, {
    baseURL: apiBaseUrl,

    ...options,
  });
};
