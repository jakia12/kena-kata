import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL, // e.g. http://localhost:5000/api
  prepareHeaders: (headers) => {
    // localStorage only exists in browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Products", "Cart", "Orders", "Me"],
  endpoints: (builder) => ({
    // ---------- AUTH ----------
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Me", "Cart", "Orders"],
    }),

    getMe: builder.query({
      query: () => "/auth/me",
      providesTags: ["Me"],
    }),

    // ---------- PRODUCTS ----------
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

    getCategories: builder.query({
      query: () => "/products/categories",
      providesTags: ["Products"],
    }),

    // ---------- CART ----------
    getCart: builder.query({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),

    upsertCartItem: builder.mutation({
      query: ({ productId, qty }) => ({
        url: "/cart",
        method: "POST",
        body: { productId, qty },
      }),

      // ✅ Optimistic update: feels instant
      async onQueryStarted({ productId, qty }, { dispatch, queryFulfilled }) {
        // Update cached cart immediately
        const patch = dispatch(
          apiSlice.util.updateQueryData("getCart", undefined, (draft) => {
            const cart = draft?.cart;
            if (!cart) return;

            const items = cart.items || [];
            const idx = items.findIndex((i) => {
              const id =
                typeof i.product === "string" ? i.product : i.product?._id;
              return String(id) === String(productId);
            });

            if (idx >= 0) {
              items[idx].qty = qty; // set qty
            } else {
              // If cart didn't have it, push minimal optimistic item
              items.push({
                product: productId,
                qty,
                priceSnapshot: 0,
                titleSnapshot: "Updating...",
                imageSnapshot: "",
              });
            }

            cart.items = items;
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patch.undo();
        }
      },

      invalidatesTags: ["Cart"],
    }),

    removeCartItem: builder.mutation({
      query: (productId) => ({
        url: `/cart/${productId}`,
        method: "DELETE",
      }),

      async onQueryStarted(productId, { dispatch, queryFulfilled }) {
        const patch = dispatch(
          apiSlice.util.updateQueryData("getCart", undefined, (draft) => {
            const cart = draft?.cart;
            if (!cart?.items) return;

            cart.items = cart.items.filter((i) => {
              const id =
                typeof i.product === "string" ? i.product : i.product?._id;
              return String(id) !== String(productId);
            });
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patch.undo();
        }
      },

      invalidatesTags: ["Cart"],
    }),

    // ---------- ORDERS ----------
    createOrderFromCart: builder.mutation({
      query: (body = {}) => ({
        url: "/orders",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Orders", "Cart"],
    }),

    getMyOrders: builder.query({
      query: () => "/orders/my",
      providesTags: ["Orders"],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetMeQuery,

  useGetProductsQuery,
  useGetCategoriesQuery,

  useGetCartQuery,
  useUpsertCartItemMutation,
  useRemoveCartItemMutation,

  useCreateOrderFromCartMutation,
  useGetMyOrdersQuery,
} = apiSlice;
