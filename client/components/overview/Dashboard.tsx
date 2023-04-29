import React, {useContext, useEffect, useState} from "react";
import QueueViewer from "./queue_viewer/QueueViewer";
import {StoreContext} from "../../lib/Store";
import {Container, Flex, Group, Space, Title, Center} from "@mantine/core";
import CheckinPopup from "../CheckinPopup";
import FooterComponent from "../FooterComponent";

const Dashboard = () => {
    const getCurrentTime = () => {
        return new Date().toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Europe/Berlin'
        });
    }

    const [time, setTime] = useState(getCurrentTime());
    const {organisation} = useContext(StoreContext);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 10000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    // TODO: connect "Verwaltungsrechner" to database
    return (
        <Container fluid style={{userSelect: "none"}}>
            <Group position="apart">
                <Flex direction="column">
                    {/* TODO: Integrate color into mantine theme and use theme color */}
                    <Title size={30} order={4} color="#0099ff">{organisation.name}</Title>
                    {/*Todo <Title size={20} order={4} color="#0099ff">Verwaltungsrechner</Title>*/}
                </Flex>
                <Flex>
                    <Title size={30} order={4} color="#0099ff">{time} Uhr</Title>
                </Flex>
            </Group>
            <Space h={60}/>
            <Container fluid>
                <Center>
                    <QueueViewer/>

                </Center>

            </Container>
            <Space h={40}/>
            <Container>
                <CheckinPopup/>
            </Container>
        </Container>

    );
}

export default Dashboard;

