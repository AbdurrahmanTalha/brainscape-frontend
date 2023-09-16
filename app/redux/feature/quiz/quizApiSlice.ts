// import { IApiResponse } from "@/app/interfaces/response";
import { apiSlice } from "../../api/apiSlice";
// import { ICourse } from "@/app/interface/Course";

export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSpecificQuiz: builder.query({
            query: ({ courseId, sectionId, quizId }: { courseId: string; sectionId: string; quizId: string }) => ({
                url: `/quiz/${courseId}/${sectionId}/${quizId}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetSpecificQuizQuery } = courseApiSlice;
