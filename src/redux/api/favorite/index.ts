import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getFavorite: build.query<
      FAVORITE.GetFavoriteResponse,
      FAVORITE.GetFavoriteRequest
    >({
      query: () => ({
        url: `/products/favorite`,
        method: "GET",
      }),
      providesTags: ["favorite"],
    }),
    favorite: build.mutation<
      FAVORITE.PatchFavoriteResponse,
      FAVORITE.PatchFavoriteRequest
    >({
      query: (id) => ({
        url: `/products/favorite/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["favorite"],
    }),
  }),
});

export const { useFavoriteMutation, useGetFavoriteQuery } = api;
