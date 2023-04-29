import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    Modal,
    Progress,
    ScrollArea,
    Space,
    TextInput,
    useMantineTheme
} from "@mantine/core";
import React, {useState} from "react";
import UrlScrapingComponent from "./UrlScrapingComponent";
import BusinessAreasComponent from "./BusinessAreasComponent";
import {UserSession} from "../models/UserSession";

interface ModalComponentProps {
    opened: boolean,
    setOpened: (opened: boolean) => void
}

const emptyUserSession = {
    "question 1": "",
    "question 2": "",
    "question 3": "",
    "question 4": "",
    "question 5": "",
    "response 1": "",
    "response 2": "",
    "response 3": "",
    "response 4": "",
    "response 5": "",
    "business_area": "",
    "workflow": "",
    "name":"",
    "url":""}

const ModalComponent = (props: ModalComponentProps) => {
    const theme = useMantineTheme();
    const [currentStep, setCurrentStep] = useState(1);
    const [userSession, setUserSession] = useState<UserSession>(emptyUserSession)
    const progess = [
        {
            step: 1,
            name: "Scraping"
        },
        {
            step: 2,
            name: "Business Areas"
        },
        {
            step: 3,
            name: "Workflows"
        },
        {
            step: 4,
            name: "Questions"
        }
    ];


    const state = {
        currentStep: 1,
        data: {}
    }

    const data = {
        projectName: "",
        url: "",
        businessAre: "",

    }

    const advanceStep = (data: any) => {
        if(state.currentStep === 1) {
            //data = service.apicall
            let state = {
                currentStep: 2,
                data: data
            }
        } else if (state.currentStep === 2) {

        }
    }

    return (
        <Modal
            opened={props.opened}
            onClose={() => {
                setUserSession(emptyUserSession);
                props.setOpened(false)}}
            title="New Project"
            overlayProps={{
                color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
            }}
            transitionProps={{ transition: "fade", duration: 300, timingFunction: "linear" }}
            size={"xl"}

        >

            <Box className="" style={{height: 700}}>
                <Box style={{ height: "90%" }}>
                    {currentStep === 1 ?
                            <UrlScrapingComponent setUserSession={setUserSession} userSession={userSession}/>
                        :
                        currentStep === 2 ?
                            <Box>
                                <ScrollArea>
                                    <BusinessAreasComponent setUserSession={setUserSession} userSession={userSession}/>
                                    </ScrollArea>
                            </Box>

                            :
                            currentStep === 3 ?
                                <Box> <ScrollArea>
                                    <BusinessAreasComponent setUserSession={setUserSession} userSession={userSession}/>
                                </ScrollArea></Box>
                                :
                                currentStep === 4 ?
                                    <Box></Box>
                                    : <Box></Box>
                    }
                </Box>





                <Grid >
                    <Grid.Col span={8} style={{marginTop: 12}}>
                        <Container>
                            <Progress
                                size="xl"
                                sections={[
                                    {value: currentStep*20 , color: '#25453F'}]}
                            />
                        </Container>

                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}} onClick={() => setCurrentStep(currentStep-1)}>Previous</Button>
                        {currentStep === 5 ? <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}} onClick={() => {}}>Finish</Button> : <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}} onClick={() => setCurrentStep(currentStep+1)}>Next</Button>}
                    </Grid.Col>
                </Grid>
            </Box>
        </Modal>
    )

}

export default ModalComponent