export interface Account {
    id: number;
    // Foreign key to organisation
    organisation_id: number;
    email: string;
}