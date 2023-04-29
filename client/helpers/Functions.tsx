import {Customer} from "../models/Customer";
import {Queue} from "../models/Queue";

export const customLabel = (text: string, required?: true) => {
    return (
        <label htmlFor="select" className="font-bold block py-2 pb-0">{text}
            <label style={{color: "red", fontWeight: "normal"}}>{required ? " *" : ""}</label>
        </label>
    );
}

export const calculateFixedWaitingTime = (customers: Customer[], queue: Queue, targetCustomer: Customer) => {
    if (customers) {
        return customers.filter(oc => oc.id !== queue.active_customer && oc.position < targetCustomer.position)
            .reduce((previous, currentCustomer) => previous + currentCustomer.duration, 0);
    } else {
        return 0;
    }
}

export const getActiveCustomerDuration = (customers: Customer[], queue: Queue) => {
    return customers?.find(c => c.id === queue.active_customer)?.duration ?? 0;
}

export const calculateTimeLeft = (latestAppointmentStart: Date | null, fixedWaitingTime: number, liveWaitingTime: number,
                                  setRemainingTime: (time: number) => void, setIsOvertime: (overtime: boolean) => void) => {
    if (latestAppointmentStart) {
        const difference = +(new Date()) - +(new Date(latestAppointmentStart));
        const minuteDifference = Math.floor((difference / 1000 / 60) % 60);
        const actualTime = (fixedWaitingTime + Math.max(0, liveWaitingTime - minuteDifference));
        const isOvertime = liveWaitingTime - minuteDifference < 0;
        setRemainingTime(actualTime);
        setIsOvertime(isOvertime);
    } else {
        setRemainingTime(fixedWaitingTime);
        setIsOvertime(false);
    }
}

export const getTimeLeftFunction = (latestAppointmentStart: Date | null, customers: Customer[], queue: Queue, currentCustomer: Customer | null,
                                    setRemainingTime: (time: number) => void, setIsOvertime: (overtime: boolean) => void) => {
    if (currentCustomer) {
        const fixedWaitingTime = calculateFixedWaitingTime(customers, queue, currentCustomer);
        const liveWaitingTime = getActiveCustomerDuration(customers, queue);
        return () => calculateTimeLeft(latestAppointmentStart, fixedWaitingTime, liveWaitingTime, setRemainingTime, setIsOvertime);
    } else {
        return () => {
        };
    }
}