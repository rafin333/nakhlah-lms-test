// v1.0.5 -----------------------------------------


// // import { API_URLS } from "@/constants/apiURL";
// // import { baseApi } from "../../api/baseApi"
// // import { TagTypes } from "@/constants/tagTypes";
// // export const examAPI = baseApi.injectEndpoints({
// //     endpoints: (build) => ({
// //       addExams: build.mutation({
// //           query: (payload) => ({
// //               url:`${API_URLS.EXAMS}`,
// //               method: "POST",
// //               data: payload
// //           }),
// //           invalidatesTags:[TagTypes.EXAMS, TagTypes.LEARNING_GAMIFICATION_STOCK]
// //       }),
// //       getExams: build.query({
// //           query: (args) => ({
// //               url:`${API_URLS.EXAMS}`,
// //               method: "GET",
// //               params: args,
// //           }),
// //           providesTags:[TagTypes.EXAMS],
          
// //       }),
// //     }),
    
// //   })

// export const { useAddExamsMutation, useGetExamsQuery } = examAPI;









// v1.0.6 -----------------------------------------


import { API_URLS } from "@/constants/apiURL";
import { baseApi } from "../../api/baseApi"
import { TagTypes } from "@/constants/tagTypes";
export const examAPI = baseApi.injectEndpoints({
    endpoints: (build) => ({
        addExams: build.mutation({
            query: (payload) => ({
                url:`${API_URLS.EXAMS}`,
                method: "POST",
                data: payload
            }),
            invalidatesTags:[
                TagTypes.EXAMS,
                TagTypes.LEARNING_GAMIFICATION_STOCK,
                TagTypes.LEARNER_PROGRESS,
                TagTypes.LEARNING_JOURNEY_LESSONS,
                TagTypes.LEARNING_JOURNEY_LEVELS
            ]
        }),
        getExams: build.query({
            query: (args) => ({
                url:`${API_URLS.EXAMS}`,
                method: "GET",
                params: args,
            }),
            providesTags:[TagTypes.EXAMS],

        }),
    }),

})

export const { useAddExamsMutation, useGetExamsQuery } = examAPI;