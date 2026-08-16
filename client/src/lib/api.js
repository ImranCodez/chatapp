import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),

  endpoints: (build) => ({
    getConversation: build.query({
      query: () => "/post",
    }),
  }),
});

export const { useGetConversationQuery } = apiSlice;