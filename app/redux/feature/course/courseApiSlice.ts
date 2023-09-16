// import { IApiResponse } from "@/app/interfaces/response";
import { apiSlice } from "../../api/apiSlice";
// import { ICourse } from "@/app/interface/Course";

export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        courses: builder.query({
            query: (data: { searchText: string; searchedCategory: string }) => ({
                url: `course?searchTerm=${data.searchText}&category=${data.searchedCategory}`,
            }),
        }),
        joinCourse: builder.mutation({
            query: ({ userId, courseId }: { userId: string; courseId: string }) => ({
                url: `/course/join-course/${userId}/${courseId}`,
                method: "POST",
            }),
        }),
        getSpecificCourse: builder.query({
            query: ({ id }: { id: string }) => ({
                url: `/course/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useCoursesQuery, useJoinCourseMutation, useGetSpecificCourseQuery } = courseApiSlice;
