import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../config/Firebase";

export const PostsApi = createApi({
  reducerPath: "PostsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    fetchPost: builder.query({
      async queryFn() {
        try {
          const posts = collection(db, "posts");
          const data = await getDocs(posts);

          let blogs = [];
          data.forEach((doc) => {
            blogs.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          return { data: blogs };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Blog"],
    }),
    addPost: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(db, "posts"), {
            ...data,
            createdAt: serverTimestamp(),
          });
          return true;
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Blog"],
    }),

    // PAGES

    fetchPage: builder.query({
      async queryFn() {
        try {
          const pages = collection(db, "pages");
          const data = await getDocs(pages);

          let blogs = [];
          data?.forEach((doc) => {
            blogs.push({
              id: doc.id,
              ...doc.data(),
            });
          });

          return { data: blogs };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["Blog"],
    }),
    addPage: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(db, "pages"), {
            ...data,
            createdAt: serverTimestamp(),
          });
          return true;
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useFetchPostQuery,
  useAddPostMutation,
  useFetchPageQuery,
  useAddPageMutation,
} = PostsApi;
