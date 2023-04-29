export interface Customer {
    id: string;
    // Foreign key for queue
    queue_id: number;
    position: number;
    name: string;
    duration: number;
    notes?: string;
}

export const getCustomerIdAsString = (customer: Customer): string => {
    return `${customer.id}`;
}