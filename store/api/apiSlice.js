import ReduxProvider from "../slices/provider";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,

  prepareHeaders: (headers) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer {$token}`);
      }
    }


  },

  return token;
});

export const apiSlice=createSlice({
    reducerPath = 'api';
    baseQuery,
    endpoints: (builder) => ({
        login:builder.mutation({
            query:(credentials)=>({
                url: 'auth/login'
                method:'post'
                body
            })
            invalidatesTags: ["Me", "Cart", "Orders"],
        })

        getMe=(builder)=>builder.query({
            url :'auth/me'
            providesTags: ["Me"],
        })
// products api
        getProducts: builder.query({
      query: ({ page = 1, limit = 12, category = "", q = "", sort = "" } = {}) => {
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
    })

})
