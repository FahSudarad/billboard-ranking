import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const billboardCoreApi = createApi({
  reducerPath: 'billboardCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://billboard-charts-rankings.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getHot100: builder.query({
      query: (date) => `hot-100?count=100&date=${date}`,
    }),
    getBillboardGolbal200: builder.query({ query: () => `billboard-global-200?count=200` }),
    getBillboard200Albums: builder.query({ query: (year) => `billboard-200-albums?count=200&year=${year}` }),
  }),
});

export const {
  useGetHot100Query,
  useGetBillboardGolbal200Query,
  useGetBillboard200AlbumsQuery,
} = billboardCoreApi;
