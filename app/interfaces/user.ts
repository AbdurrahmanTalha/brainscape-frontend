export type IName = {
    firstName: string;
    middleName?: string;
    lastName: string;
};

export type IUser = {
    name: IName;
    email: string;
    password: string;
    role: "student" | "teacher" | "admin";
    contact?: string;
    profilePicture: string;
    student?: string;
    teacher?: string;
    admin?: string;
};

export type IRefreshTokenResponse = {
    accessToken: string;
    user: Partial<IUser>
};
