export interface IQuizzes  {
    _id: string;
    title: string;
    quiz: Array<{
        quiz: string;
        index: number;
    }>;
}

export interface ICourse  {
    _id: string;
    category: string;
    quizzes: IQuizzes[];
    description: string;
    image: string;
    status: "Public" | "Private";
    title: string;
}