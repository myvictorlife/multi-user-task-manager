export interface User {
    _id: string;
    img?: string;
    name: string;
    email: string;
    password?: string;
}

export interface UserResponse {
    user: User;
    token: string;
}