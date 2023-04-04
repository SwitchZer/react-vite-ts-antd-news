import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_NEWS_API_URL }),
  endpoints: (builder) => ({
    getTopHeadlines: builder.query({
      query: () => ({
        url: `top-headlines`,
        params: {
          apiKey: API_KEY,
          country: "us",
        },
      }),
    }),
    getAllNews: builder.query({
      query: () => ({
        url: `everything`,
        params: {
          apiKey: API_KEY,
          q: "ps5",
          pageSize: 12,
        },
      }),
    }),
  }),
});

export const { useGetTopHeadlinesQuery, useGetAllNewsQuery } = newsApi;
