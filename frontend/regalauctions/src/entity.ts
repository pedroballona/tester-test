export interface User {
    name: String;
    username: String;
    password: String;
    email: String;
    cpf: String;
    isAdmin: boolean;
}

export interface Auction {
    id: number;
    name: String;
    initial_value: number;
    is_used: boolean;
    opening_date: String;
    ending_date: String;
    user: String;
}

export interface Bid {
    id: number;
    user: string;
    auction: number;
    value: number;
}

export interface UserResponse {
    user: {username: string, email: string};
    email: String;
    cpf: String;
    is_admin: boolean;
    name: String;
}