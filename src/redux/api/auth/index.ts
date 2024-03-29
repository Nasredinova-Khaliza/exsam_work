import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<GetMeResponse, GetMeRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const { useGetMeQuery } = api;
