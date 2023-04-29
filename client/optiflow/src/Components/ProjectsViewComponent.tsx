import {Box, Button, Card, Container, Grid, Group, Image, Loader, Modal, Text, useMantineTheme} from "@mantine/core";
import ProjectComponent from "./ProjectComponent";
import AddNewProjectComponent from "./AddNewProjectComponent";
import React, {useEffect, useState} from "react";
import {Project} from "../models/Project";
import ProjectService from "../Service/ProjectService";
import {useDisclosure} from "@mantine/hooks";
import ModalComponent from "./ModalComponent";
import UrlScrapingComponent from "./UrlScrapingComponent";
import {UserSession} from "../models/UserSession";

const ProjectsViewComponent = () => {

    const [userSessions, setUserSessions] = useState(null as UserSession[] | null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [opened, setOpened] = useState(false);


    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(true);
        }, 1000);
            ProjectService.getAllProjects().then(data => {
                clearTimeout(loadingTimeout);
                setIsLoading(false);
                setUserSessions(data)
            })
    }, [
        ]
    )

    return (
        <Box className="h-full">
            {
                !isLoading ?
                    userSessions ?
                    <Container fluid className="h-full" style={{maxWidth: 1400}}>
                        <Grid className="pt-5">
                            {userSessions.map(userSession =>
                                <Grid.Col span={3} key={userSession.projectName}>
                                    <ProjectComponent userSession={userSession}/>
                                </Grid.Col>)
                            }
                            <Grid.Col span={3}>
                                <Box onClick={() => setOpened(true)}>
                                    <AddNewProjectComponent />
                                </Box>
                            </Grid.Col>

                        </Grid>
                       <ModalComponent opened={opened} setOpened={setOpened}/>


                    </Container>
                        : <></>
                    :
                    <Container className="text-white" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Loader color="white" />
                            <Text className="pt-5">Loading...</Text>
                        </div>
                    </Container>


            }
        </Box>
    )

}
export default ProjectsViewComponent;