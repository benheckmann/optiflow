import {Box, Center, Container, Grid, Title, Text} from '@mantine/core';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import {Customer, getCustomerIdAsString} from '../../../models/Customer';
import {move, reorder} from "../../../util/ListUtil";
import React, {useContext, useMemo, useState} from "react";
import CustomerPopup from "../CustomerPopup";
import {StoreContext} from "../../../lib/Store";
import QueueCustomerActive from "./QueueCustomerActive";
import QueueCustomer from "./QueueCustomer";

const QueueViewer = () => {
    const [popup, setPopup] = useState(null as Customer | null);

    const {
        queues,
        customersInQueue,
        updateCustomersInQueue,
        deleteCustomer,
        updateQueue
    } = useContext(StoreContext);

    const onDragEnd = ({destination, source}: DropResult) => {
        // dropped outside the lists
        if (!destination) {
            return;
        }

        const sourceId = +source.droppableId;
        const destinationId = +destination.droppableId;

        let sourceIndex = source.index;
        if (activeCustomer[sourceId]) {
            sourceIndex++;
        }

        let destinationIndex = destination.index;
        if (activeCustomer[destinationId]) {
            destinationIndex++;
        }

        if (sourceId === destinationId) {
            const items = reorder(customersInQueue[sourceId], sourceIndex, destinationIndex);
            const newState = {...customersInQueue};
            newState[sourceId] = items;
            updateCustomersInQueue(newState);
        } else {
            const result = move(customersInQueue[sourceId], customersInQueue[destinationId], sourceIndex, destinationIndex, sourceId, destinationId);
            const newState = {...customersInQueue};
            newState[sourceId] = result[sourceId];
            newState[destinationId] = result[destinationId];
            updateCustomersInQueue(newState);
        }
    };

    const activeCustomer = useMemo(() => {
        const result = [] as { [queue_id: number]: Customer | null };
        queues.forEach((queue) => {
            result[queue.id] = customersInQueue[queue.id]?.find(customer => customer.id === queue.active_customer) ?? null;
        });
        return result;
    }, [queues, customersInQueue]);

    const passiveCustomersInQueue = useMemo(() => {
        const result = [] as { [queue_id: number]: Customer[] };
        queues.forEach((queue) => {
            result[queue.id] = customersInQueue[queue.id]?.filter(customer => customer.id !== queue.active_customer) ?? [];
            result[queue.id].sort((a, b) => {
                return a.position - b.position
            });
        });
        return result;
    }, [queues, customersInQueue]);

    return (
        <>
            {popup ?
                <CustomerPopup customer={popup}
                               appointmentStart={null}//Todo{queues ? queues.find(q => q.id == popup.queue_id).latest_appointment_start : null}
                               queues={queues} onClose={() => setPopup(null)}/>
                : <></>
            }
            <Box style={{maxWidth: 1500}}>
                <Grid justify={"center"} className="w-100" gutter={1}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        {queues.sort((q1, q2) => q1.name.localeCompare(q2.name)).map(((queue, queue_index) => (
                            <Grid.Col xs={9}  sm={6} md={5} lg={4} xl={3} span={10} key={queue_index} className="w-full"
                                      style={{ padding: 0, marginTop: 20, minHeight: 500, minWidth: 300, maxWidth: 400}}>
                                <Center className="h-full p-0 m-0">
                                    <Container p={10} m={10} className="bg-gray-100 rounded h-full p-0 m-0 w-full"
                                               style={{}}>
                                        <Container style={{padding: 0, margin: 0}}>
                                            <Title order={3} align="center">{queue.name}</Title>
                                        </Container>
                                        <QueueCustomerActive activeCustomer={activeCustomer[queue.id]} queue={queue}
                                                             setPopup={setPopup} deleteCustomer={deleteCustomer}
                                                             appointmentStart={queue.latest_appointment_start}
                                        />


                                        <Droppable key={queue.id} droppableId={`${queue.id}`} direction="vertical">
                                            {(provided) => (
                                                <div className="m-2 h-full"
                                                     {...provided.droppableProps}
                                                     ref={provided.innerRef}>
                                                    {passiveCustomersInQueue[queue.id].map((customer, customer_index) => (
                                                        <Draggable key={getCustomerIdAsString(customer)}
                                                                   index={customer_index}
                                                                   draggableId={getCustomerIdAsString(customer)}>
                                                            {(provided, snapshot) =>
                                                                <QueueCustomer isDragging={snapshot.isDragging}
                                                                               provided={provided} setPopup={setPopup}
                                                                               queue={queue}
                                                                               isHighlighted={customer_index === 0 && activeCustomer[queue.id] === null}
                                                                               customer={customer}
                                                                               updateQueue={updateQueue}/>
                                                            }
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </Container>
                                </Center>
                            </Grid.Col>
                        )))}
                    </DragDropContext>
                </Grid>
            </Box>
        </>
    );
};

export default QueueViewer;