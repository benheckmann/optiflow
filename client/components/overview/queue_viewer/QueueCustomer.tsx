import {useTranslation} from "next-i18next";
import {Customer} from "../../../models/Customer";
import {Button, Card, Group, Popover, Text} from "@mantine/core";
import React from "react";
import {Queue} from "../../../models/Queue";
import {DraggableProvided} from "react-beautiful-dnd";

interface QueueCustomerProps {
    isDragging: boolean;
    provided: DraggableProvided;
    setPopup: (value: Customer) => void;
    customer: Customer;
    isHighlighted: boolean;
    queue: Queue;
    updateQueue: (queue: Queue) => void;
}

const QueueCustomer = (props: QueueCustomerProps) => {
    const {t} = useTranslation();

    return <Card mb="sm" shadow="sm"
        {...props.provided.draggableProps}
        {...props.provided.dragHandleProps}
        ref={props.provided.innerRef}>
        <Group position="center" style={{
            width: '100%',
            height: '100%',
            margin: 0,
            padding: 0
        }}>
            <div className="text-gray-500 text-center font-bold m-2"
                 onClick={() => props.setPopup(props.customer)}>
                <Text>{props.customer.name}</Text>
                <Text size="sm">
                    {t('duration')}: {props.customer.duration} {t('multipleMinutes')}
                </Text>
                <div className="flex mt-2 justify-center"
                     onClick={(e) => e.stopPropagation()}>
                    {props.isHighlighted ?
                        <Popover trapFocus position="bottom"
                                 withArrow
                                 shadow="md"
                        >
                            <Popover.Target>
                                <Button color="green">
                                    {t('call')}
                                </Button>
                            </Popover.Target>
                            <Popover.Dropdown
                                sx={(theme) => ({background: theme.white})}>
                                <Button color="gray"
                                        onClick={() => {
                                            const newQueue = {...props.queue};
                                            newQueue.active_customer = props.customer.id;
                                            newQueue.latest_appointment_start = new Date();
                                            props.updateQueue(newQueue);
                                        }}>
                                    {t('confirm')}
                                </Button>
                            </Popover.Dropdown>
                        </Popover> : <></>}
                </div>
            </div>
        </Group>
    </Card>;
};

export default QueueCustomer;