import React, {useEffect, useState} from "react";
import {Project} from "../models/Project";
import ProjectService from "../Service/ProjectService";
import {Box, Container, Grid, Loader, ScrollArea, Text} from "@mantine/core";
import ProjectComponent from "./ProjectComponent";
import AddNewProjectComponent from "./AddNewProjectComponent";
import ModalComponent from "./ModalComponent";
import BusinessAreaCardComponent from "./BusinessAreaCardComponent";
import BusinessAreaService from "../Service/BusinessAreaService";
import {BusinessArea} from "../models/BusinessArea";
import {UserSession} from "../models/UserSession";
import WorkflowsService from "../Service/WorkflowsService";


interface WorkflowsComponentProps {
    userSession: UserSession,
    setUserSession: (userSession: UserSession) => void;
}
const WorkflowsComponent = (props: WorkflowsComponentProps) => {

    const [workflows, setWorkflows] = useState(null as BusinessArea[] | null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [opened, setOpened] = useState(false);
    const [selected, setSelectedB] = useState(false);
    const [selectedName, setSelectedName] = useState(null as string | null);



    useEffect(() => {

            const loadingTimeout = setTimeout(() => {
                setIsLoading(true);
            }, 1000);
            WorkflowsService.getAllWorkflows().then(data => {
                clearTimeout(loadingTimeout);
                setIsLoading(false);
                setWorkflows(data)
            })
        }, [
        ]
    )

    const setSelected2 = (name: string, selected: boolean) => {
        setSelectedB(selected);
        setSelectedName(name);
        props.setUserSession({
            ...props.userSession,
            workflow: name
        })
    }

    return (
        <Box className="h-full">
            {
                !isLoading ?
                    workflows ?
                        <Container fluid className="h-full" style={{maxWidth: 1400, textAlign: "center"}}>
                            <Grid className="pt-5 " style={{height: "100%"}}>
                                {workflows.map(project =>
                                    <Grid.Col span={4} style={{height: "100%"}} key={project.name}>
                                        <BusinessAreaCardComponent name={project.name} description={project.description} selected={project.name === selectedName || project.name === props.userSession.workflow} setSelected={setSelected2}/>
                                    </Grid.Col>)
                                }
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

export default WorkflowsComponent;
