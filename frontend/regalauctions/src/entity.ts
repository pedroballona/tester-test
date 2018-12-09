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