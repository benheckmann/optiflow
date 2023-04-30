import {
    Box,
    Button,
    Container,
    Grid,
    LoadingOverlay,
    Modal,
    Progress,
    ScrollArea, Text,
    useMantineTheme
} from "@mantine/core";
import React, {useState} from "react";
import UrlScrapingComponent from "./UrlScrapingComponent";
import BusinessAreasComponent from "./BusinessAreasComponent";
import {QUESTION_AMOUNT, UserSession} from "../models/UserSession";
import QuestionComponent from "./QuestionComponent";
import Services from "../Service/Services";
import LoadingScreen from "./LoadingScreen";

interface ModalComponentProps {
    opened: boolean,
    setOpened: (opened: boolean) => void
}

const emptyUserSession: UserSession = {
    "projectName": "",
    "companyName": "",
    "description": "",
    "companyProfile": "",
    "industry": "",
    "url": "",
    "business_areas": [],
    "selected_business_area": 0,
    "workflows": [],
    "selected_workflow": 0,
    "questions": [],
    "summary": "",
    "tools": []
}

const ModalComponent = (props: ModalComponentProps) => {
    const theme = useMantineTheme();
    const [currentStep, setCurrentStep] = useState(1);
    const [userSession, setUserSession] = useState<UserSession>(emptyUserSession)

    const advanceStep = () => {
        switch (currentStep) {
            case 1:
                Services.getAllBusinessAreas(userSession.url).then(data => {
                    setUserSession(userSession => {
                        return {
                            ...userSession,
                            business_areas: data
                        }
                    });
                });
                break;
            case 2:
                Services.getAllWorkflows(userSession.business_areas[userSession.selected_business_area]).then(data => {
                    setUserSession(userSession => {
                        return {
                            ...userSession,
                            workflows: data
                        }
                    })
                });
                break;
            case 3:
                Services.getQuestions(userSession.workflows[userSession.selected_workflow]).then(data => {
                    setUserSession(userSession => {
                        return {
                            ...userSession,
                            questions: data.map(q => {
                                return {
                                    question: q,
                                    answer: ""
                                }
                            })
                        }
                    })
                });
                break;
            case 8:
                Services.postQuestions(userSession.questions).then(data => {
                    props.setOpened(false);
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
                                currentStep >= 4 && currentStep <= 8 ?
                                    userSession.questions[currentStep - 4] ?
                                        <QuestionComponent question={currentStep - 4} userSession={userSession}
                                                           setUserSession={setUserSession}/>
                                        : <LoadingScreen/>
                                    : <Container className="text-white" style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%"
                                    }}>
                                        <Text>Working on recommendations...</Text>
                                        <LoadingOverlay visible={true}/>
                                    </Container>
                    }
                </Box>


                {currentStep < 9 ?
                    <Grid className="bg-amber-300" style={{backgroundColor: "white"}}>
                        <Grid.Col span={8} style={{marginTop: 12}}>
                            <Container>
                                <Progress
                                    size="xl"
                                    sections={[
                                        {value: (currentStep - 1) * (100 / (2 + QUESTION_AMOUNT)), color: '#25453F'}]}
                                />
                            </Container>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}}
                                    onClick={() => setCurrentStep(currentStep - 1)}>Previous</Button>
                            <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}}
                                    onClick={() => {
                                        advanceStep();
                                    }}>
                                {currentStep !== 8 ? "Next" : "Finished"}
                            </Button>
                        </Grid.Col>
                    </Grid> : <></>
                }
            </Box>
        </Modal>
    )

}

export default ModalComponent