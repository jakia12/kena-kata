import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers) => {
      // only runs in browser
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
          headers.set("authorization", `Bearer ${token}`); // ✅ fixed
        }
      }
      return headers; // ✅ must return headers
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

    // ✅ CATEGORIES
    getCategories: builder.query({
      query: () => "/products/categories",
      providesTags: ["Products"],
    }),
  }),
});

// ✅ Auto-generated hooks
export const {
  useLoginMutation,
  useGetMeQuery,
  useGetProductsQuery,
  useGetCategoriesQuery,
} = apiSlice;
