import { apiSlice } from "../../api/apiSlice";

export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        joinCourse: builder.mutation({
            query: ({ userId, courseId }) => ({
                url: `/course/join-course/${userId}/${courseId}`,
                method: "POST",
            }),
        }),
    }),
});

export const { useJoinCourseMutation } = courseApiSlice;
