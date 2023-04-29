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
    userSession: UserSession;
    setUserSession: (userSession: UserSession) => void;
    isWorkflow: boolean;
}

const BusinessAreasComponent = (props: BusinessAreasComponentProps) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [opened, setOpened] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null as number | null);


    useEffect(() => {
            const loadingTimeout = setTimeout(() => {
                if ((props.isWorkflow && props.userSession.workflows.length === 0)
                    || (!props.isWorkflow && props.userSession.business_areas.length === 0)) {
                    setIsLoading(true);
                }
            }, 1000);
            return () => {
                clearTimeout(loadingTimeout);
            }
        }, [props]
    )

    const setSelected = (index: number, isSelected: boolean) => {
        setSelectedIndex(index);
        if (props.isWorkflow) {
            props.setUserSession({
                ...props.userSession,
                selected_workflow: index
            });
        } else {
            props.setUserSession({
                ...props.userSession,
                selected_business_area: index
            });
        }
    }

    const businessAreas = props.isWorkflow ? props.userSession.workflows : props.userSession.business_areas;
    const selected = props.isWorkflow ? props.userSession.selected_workflow : props.userSession.selected_business_area;

    return (
        <Box className="h-full">
            {
                !isLoading ?
                    businessAreas ?
                        <Container fluid className="h-full" style={{maxWidth: 1400, textAlign: "center"}}>
                            <Grid className="pt-5 " style={{height: "100%"}}>
                                {businessAreas.map((businessArea, index) => (
                                    <Grid.Col span={4} className="d-flex" style={{height: '100%'}}
                                              key={businessArea.title}>
                                        <BusinessAreaCardComponent
                                            index={index}
                                            businessArea={businessArea}
                                            selected={index === selectedIndex || index === selected}
                                            setSelected={setSelected}
                                        />
                                    </Grid.Col>
                                ))}
                            </Grid>
                            <ModalComponent opened={opened} setOpened={setOpened}/>


                        </Container>
                        : <></>
                    :
                    <Container className="text-white" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%"
                    }}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Loader color="white"/>
                            <Text className="pt-5">Loading...</Text>
                        </div>
                    </Container>


            }
        </Box>
    )

}

export default BusinessAreasComponent;
