import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getBasket: build.query<BASKET.GetBasketResponse, BASKET.GetBasketRequest>({
      query: () => ({
        url: `/products/basket`,
        method: "GET",
      }),
      providesTags: ["basket"],
    }),
    basketPatch: build.mutation<
      BASKET.PatchBasketResponse,
      BASKET.PatchBasketRequest
    >({
      query: (id) => ({
        url: `/products/basket/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["basket"],
    }),
  }),
});

export const { useBasketPatchMutation, useGetBasketQuery } = api;
