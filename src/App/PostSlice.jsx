import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { addDoc, collection, getDocs, serverTimestamp  } from 'firebase/firestore'
import { db } from '../config/Firebase';


export const PostsApi = createApi({
    reducerPath: "PostsApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        fetchPost: builder.query({
           async queryFn() {
                try {
                    const posts = collection(db, 'posts');
                    const  data = await getDocs(posts);
                    let  result = [];
                    data?.forEach((doc)=>{ 
                       result.push({id : doc.id , ...doc.data()})  
                       });
                       return {data: result}
                } catch (error) {
                    return {error}
                }
            }
        }),
        addPost: builder.mutation({
            async queryFn(data) {
                try {
                    await addDoc(collection(db, 'posts'), { ...data, createdAt: serverTimestamp() });
                    return true;
                } catch (error) {
                    return {error}
                }
            }
        })
    })
 });

 export const  { useFetchPostQuery, useAddPostMutation } = PostsApi;