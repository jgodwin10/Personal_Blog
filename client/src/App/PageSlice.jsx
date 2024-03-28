import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../config/Firebase";

export const PagesApi = createApi({
  reducerPath: "PostsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    
  }),
});

export const {  } = PagesApi;
