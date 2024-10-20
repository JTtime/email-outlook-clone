export interface EmailBodyType {
    id: string;
    body: string;
}


export interface EmailData {
    id: string;
    from: {
        email: string;
        name: string;
    };
    date: number;
    subject: string;
    short_description: string;
}