export type IQuestion = {
    questionType: "Bullet Point" | "Explanation" | "Fill in the gap";
    bulletPoints?: string[];
    description: string;
    question: string;
    answer: string | number;
    index: number;
    explanation: string;
    _id: string;
};

export type IQuiz = {
    questions: IQuestion[];
    title: string;
    _id: string;
};
