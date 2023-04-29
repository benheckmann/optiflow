import {Customer} from "../../../models/Customer";
import {Queue} from "../../../models/Queue";
import {Button, Card, Group, Popover, Text} from "@mantine/core";
import React, {useEffect, useState} from "react";
import {useTranslation} from "next-i18next";
import {useStore} from "../../../lib/Store";
import {getTimeLeftFunction} from "../../../helpers/Functions";

interface QueueCustomerActiveProps {
    activeCustomer: Customer | null;
    queue: Queue;
    appointmentStart: Date | null;
    setPopup: (customer: Customer) => void;
    deleteCustomer: (customer: Customer) => void;
}

const QueueCustomerActive = (props: QueueCustomerActiveProps) => {
    const {t} = useTranslation();
    const [remainingTime, setRemainingTime] = useState(0);
    const [isOvertime, setIsOvertime] = useState(false);

    const {customersInQueue, updateCustomer} = useStore();

    useEffect(() => {
        const timeLeft = getTimeLeftFunction(props.queue.latest_appointment_start, customersInQueue[props.queue.id], props.queue, props.activeCustomer,
            setRemainingTime, setIsOvertime);

        const intervalId = setInterval(timeLeft, 10000);
        timeLeft();

        return () => {
            clearInterval(intervalId);
        };
    }, [props.activeCustomer, customersInQueue, props.appointmentStart, updateCustomer])

    const getRemainingTimeText = () => {
        if (!isOvertime) {
            return t('administration.remainingTime', {minutes: remainingTime});
        } else {
            return t('administration.timeExceeded');
        }
    }

    return props.activeCustomer !== null ? (
        <Card shadow="sm" m={8}>
            <Group position="center" style={{
                width: '100%',
                height: '100%',
                margin: 0,
                padding: 0,
                cursor: "pointer"
            }}>
                <div className="text-gray-500 text-center font-bold m-2"
                     onClick={() => props.setPopup(props.activeCustomer as Customer)}>
                    <Text>{props.activeCustomer.name}</Text>
                    <Text size="sm">
                        {t('administration.duration', {minutes: props.activeCustomer.duration})}
                    </Text>
                    {props.appointmentStart !== null ?
                        <Text size="sm" color={remainingTime < 5 ? "red" : ""}>
                            {getRemainingTimeText()}
                        </Text>
                        : <></>}
                    <div className="mt-2 flex justify-center"
                         onClick={(e) => e.stopPropagation()}>
                        <div className="grid grid-cols-2 gap-2">
                            <Popover trapFocus position="bottom" withArrow
                                     shadow="md">
                                <Popover.Target>
                                    <Button color="red">
                                        {t('checkout')}
                                    </Button>
                                </Popover.Target>
                                <Popover.Dropdown
                                    sx={(theme) => ({background: theme.white})}>
                                    <Button color="gray"
                                            onClick={() => props.deleteCustomer(props.activeCustomer as Customer)}>
                                        {t('confirm')}
                                    </Button>
                                </Popover.Dropdown>
                            </Popover>
                            <Button color="gray" onClick={() => {
                                if (props.activeCustomer && props.activeCustomer?.duration) {
                                    updateCustomer({
                                        ...props.activeCustomer,
                                        duration: props.activeCustomer.duration + 5
                                    }).finally(() => {
                                        if (props.activeCustomer) {
                                            props.activeCustomer.duration += 5;
                                        }
                                    });
                                }
                            }}>
                                {t('administration.extraMinutes')}
                            </Button>
                        </div>
                    </div>
                </div>
            </Group>
        </Card>
    ) : <></>;
};

export default QueueCustomerActive;