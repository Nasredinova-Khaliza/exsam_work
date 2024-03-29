import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      PRODUCT.GetProductsResponse,
      PRODUCT.GetProductsRequest
    >({
      query: () => ({
        url: "/products/get",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    postProduct: builder.mutation<
      PRODUCT.PostProductsResponse,
      PRODUCT.PostProductsRequest
    >({
      query: (newData) => ({
        url: "/products/create",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, usePostProductMutation } = api;
