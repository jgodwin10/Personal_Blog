import { configureStore } from "@reduxjs/toolkit";
import { PostsApi } from "./PostSlice";

import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [PostsApi.reducerPath]: PostsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostsApi.middleware),
});

setupListeners(store.dispatch);
