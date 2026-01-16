import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token; // adjust path
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  tagTypes: ["Me", "Cart", "Orders", "Products"],

  endpoints: (builder) => ({
    // ✅ LOGIN
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Me", "Cart", "Orders"],
    }),

    // ✅ GET ME
    getMe: builder.query({
      query: () => "/auth/me",
      providesTags: ["Me"],
    }),

    // ✅ PRODUCTS
    getProducts: builder.query({
      query: ({
        page = 1,
        limit = 12,
        category = "",
        q = "",
        sort = "",
      } = {}) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (category) params.set("category", category);
        if (q) params.set("q", q);
        if (sort) params.set("sort", sort);

        return `/products?${params.toString()}`;
      },
      providesTags: ["Products"],
    }),
    // ✅ SINGLE PRODUCT (by slug)

    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      transformResponse: (response) =>
        response.product || response.data || response,
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),

    // ✅ CATEGORIES
    getCategories: builder.query({
      query: () => "/products/categories",
      providesTags: ["Products"],
    }),
    // all mutation

    // ✅ CART
    getMyCart: builder.query({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),

    upsertCartItem: builder.mutation({
      query: ({ productId, qty = 1 }) => ({
        url: "/cart",
        method: "POST",
        body: { productId, qty },
      }),
      invalidatesTags: ["Cart"],
    }),

    removeCartItem: builder.mutation({
      query: (productId) => ({
        url: `/cart/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    addToWishlist: builder.mutation({
      query: ({ productId }) => ({
        url: "/wishlist",
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Me"],
    }),

    removeFromWishlist: builder.mutation({
      query: ({ productId }) => ({
        url: `/wishlist/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

// ✅ Auto-generated hooks
export const {
  useGetMyCartQuery,
  useUpsertCartItemMutation,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
  useLoginMutation,
  useGetMeQuery,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useGetCategoriesQuery,
} = apiSlice;
