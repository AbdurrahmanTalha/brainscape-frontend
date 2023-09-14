// import { IApiResponse } from "@/app/interfaces/response";
import { apiSlice } from "../../api/apiSlice";
// import { ICourse } from "@/app/interface/Course";

export const courseApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        courses: builder.query({
            query: (data:{searchText:string,searchedCategory:string}) => ({
                url: `course?searchTerm=${data.searchText}&category=${data.searchedCategory}`,
                }),
        }),
        
    }),
});

export const { useCoursesQuery  } = courseApiSlice;
