import {Box, Button, Container, Grid, Modal, Progress, ScrollArea, useMantineTheme} from "@mantine/core";
import React, {useState} from "react";
import UrlScrapingComponent from "./UrlScrapingComponent";
import BusinessAreasComponent from "./BusinessAreasComponent";
import {QUESTION_AMOUNT, UserSession} from "../models/UserSession";
import QuestionComponent from "./QuestionComponent";
import BusinessAreaService from "../Service/BusinessAreaService";
import WorkflowsService from "../Service/WorkflowsService";

interface ModalComponentProps {
    opened: boolean,
    setOpened: (opened: boolean) => void
}

const emptyUserSession: UserSession = {
    "name": "",
    "url": "",
    "business_areas": [],
    "selected_business_area": 0,
    "workflows": [],
    "selected_workflow": 0,
    "questions": []
}

const ModalComponent = (props: ModalComponentProps) => {
    const theme = useMantineTheme();
    const [currentStep, setCurrentStep] = useState(1);
    const [userSession, setUserSession] = useState<UserSession>(emptyUserSession)

    const advanceStep = () => {
        switch (currentStep) {
            case 1:
                BusinessAreaService.getAllBusinessAreas(userSession.url).then(data => {
                    setUserSession(userSession => {
                        return {
                            ...userSession,
                            business_areas: data
                        }
                    });
                });
            case 2:
                WorkflowsService.getAllWorkflows().then(data => {
                    setUserSession(userSession => {
                        return {
                            ...userSession,
                            workflows: data
                        }
                    })
                });

        }
        setCurrentStep(currentStep + 1);
    }

    return (
        <Modal
            opened={props.opened}
            onClose={() => {
                setUserSession(emptyUserSession);
                props.setOpened(false);
            }}
            title="New Project"
            overlayProps={{
                color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.dark[9],
                opacity: 0.55,
                blur: 3,
            }}
            transitionProps={{transition: "fade", duration: 300, timingFunction: "linear"}}
            size={"xl"}
        >

            <Box className="" style={{height: 700}}>
                <Box style={{height: "90%"}}>
                    {currentStep === 1 ?
                        <UrlScrapingComponent setUserSession={setUserSession} userSession={userSession}/>
                        :
                        currentStep === 2 ?
                            <Box>
                                <ScrollArea h={600}>
                                    <BusinessAreasComponent isWorkflow={false} setUserSession={setUserSession}
                                                            userSession={userSession}/>
                                </ScrollArea>
                            </Box>
                            :
                            currentStep === 3 ?
                                <Box> <ScrollArea h={600}>
                                    <BusinessAreasComponent isWorkflow={true} setUserSession={setUserSession}
                                                            userSession={userSession}/>
                                </ScrollArea></Box>
                                :
                                currentStep >= 4 && userSession.questions[currentStep - 4] ?
                                    <QuestionComponent question={currentStep - 4} userSession={userSession}
                                                       setUserSession={setUserSession}/>
                                    : <></>
                    }
                </Box>


                <Grid className="bg-amber-300" style={{backgroundColor: "white"}}>
                    <Grid.Col span={8} style={{marginTop: 12}}>
                        <Container>
                            <Progress
                                size="xl"
                                sections={[
                                    {value: currentStep * (100 / (3 + QUESTION_AMOUNT)), color: '#25453F'}]}
                            />
                        </Container>

                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}}
                                onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>
                        {currentStep === 8 ?
                            <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}} onClick={() => {
                            }}>Finish</Button> : <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}}
                                                         onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>}
                    </Grid.Col>
                </Grid>
            </Box>
        </Modal>
    )

}

export default ModalComponent