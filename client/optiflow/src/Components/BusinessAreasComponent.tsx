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


interface BusinessAreasComponentProps {
    userSession: UserSession,
    setUserSession: (userSession: UserSession) => void;
}
const BusinessAreasComponent = (props: BusinessAreasComponentProps) => {

    const [businessAreas, setBusinessAreas] = useState(null as BusinessArea[] | null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [opened, setOpened] = useState(false);
    const [selected, setSelectedB] = useState(false);
    const [selectedName, setSelectedName] = useState(null as string | null);



    useEffect(() => {
            const loadingTimeout = setTimeout(() => {
                setIsLoading(true);
            }, 1000);
            BusinessAreaService.getAllBusinessAreas().then(data => {
                clearTimeout(loadingTimeout);
                setIsLoading(false);
                setBusinessAreas(data)
            })
        }, [
        ]
    )

    const setSelected = (name: string, selected: boolean) => {
        setSelectedB(selected);
        setSelectedName(name);
        props.setUserSession({
            ...props.userSession,
            business_area: name
        })
    }

    return (
        <Box className="h-full">
            {
                !isLoading ?
                    businessAreas ?
                        <Container fluid className="h-full" style={{maxWidth: 1400, textAlign: "center"}}>
                            <Grid className="pt-5 " style={{height: "100%"}}>
                                {businessAreas.map((project) => (
                                    <Grid.Col span={4} className="d-flex" style={{ height: '100%' }} key={project.name}>
                                        <BusinessAreaCardComponent
                                            name={project.name}
                                            description={project.description}
                                            selected={project.name === selectedName || project.name === props.userSession.business_area}
                                            setSelected={setSelected}
                                        />
                                    </Grid.Col>
                                ))}
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

export default BusinessAreasComponent;
