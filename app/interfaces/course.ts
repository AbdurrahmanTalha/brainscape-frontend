import { IQuiz } from "./quiz";

export type ISection = {
    section: string;
    quiz: IQuiz[];
    _id: string;
};

export type ICourse = {
    category: string;
    sections: ISection[];
    description: string;
    image: string;
    status: "Public" | "Private";
    title: string;
    _id: string;
};
