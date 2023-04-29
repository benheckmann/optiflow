export interface Queue {
    id: number;
    // Foreign key for organisation
    organisation_id: number;
    active_customer: string | null;
    name: string;
    // Time when the latest customer has started his appointment
    latest_appointment_start: Date | null;
}