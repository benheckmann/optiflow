import {Customer} from "./Customer";

export interface ListQueue {
    id: number;
    organisation_id: number;
    name: string;
    latest_appointment_start: Date;

    customers: Customer[];
}