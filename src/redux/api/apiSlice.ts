import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ 
        baseUrl: "http://localhost:5000/" 
    }),
    // tagTypes and providesTags use for refetch delete 
    //invalidatesTags use for refetch post
	tagTypes: ["Contacts"],
	endpoints: (builder) => ({
		// postContact : builder.mutation({
		//     query:({id,data}) =>({
		//         url:`/contact/${id}`,
		//         method: 'POST',
		//          body: data,
		//     }),
		// }),

		postContact: builder.mutation({
			query: (data) => ({
				url: "/contacts",
				method: "POST",
				body: data,
			}),
            invalidatesTags : ["Contacts"]
		}),

		getContact: builder.query({
			query: () => "/contacts",
            providesTags: ["Contacts"],
		}),

		getSingleContact: builder.query({
			query: (id) => ({
                url: `/contact/${id}`
            }),
			providesTags: ["Contacts"],
		}),

		editContact: builder.mutation({
			query: ({id, editFirstName, editLastName}) => ({
				url: `/edit/${id}`,
				method: "PUT",
				body: { editFirstName, editLastName },
				
			}),
            invalidatesTags : ["Contacts"]
		}),
		removeContact: builder.mutation({
			query: (id) => ({
				url: `/contact/${id}`,
				method: "DELETE",
			}),
			// delete instantly
			invalidatesTags : ["Contacts"]
		}),
	}),
});

export const {
	usePostContactMutation,
	useGetContactQuery,
	useGetSingleContactQuery,
    useEditContactMutation,
    useRemoveContactMutation,
} = api;
