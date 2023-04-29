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
import WorkflowsComponent from "./WorkflowsComponent";
import QuestionComponent from "./QuestionComponent";

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
    "projectName":"",
    "companyName":"",
        "url":"",
    "summary":"",
    "description":"",
    "industry":"industry",
    "companyProfile":"companyProfile"}

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
                color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.dark[9],
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
                                <ScrollArea h={600}>
                                    <BusinessAreasComponent setUserSession={setUserSession} userSession={userSession}/>
                                    </ScrollArea>
                            </Box>

                            :
                            currentStep === 3 ?
                                <Box> <ScrollArea h={600}>
                                    <WorkflowsComponent setUserSession={setUserSession} userSession={userSession}/>
                                </ScrollArea></Box>
                                :
                                currentStep === 4 ?
                                   <QuestionComponent question={""} userSession={userSession} setUserSession={setUserSession}/>
                                    :  currentStep === 5 ?
                                        <QuestionComponent question={""} userSession={userSession} setUserSession={setUserSession}/>
                                        : currentStep === 6 ?
                                            <QuestionComponent question={""} userSession={userSession} setUserSession={setUserSession}/>
                                            : currentStep === 7 ?
                                                <QuestionComponent question={""} userSession={userSession} setUserSession={setUserSession}/>
                                                : <QuestionComponent question={""} userSession={userSession} setUserSession={setUserSession}/>


                    }
                </Box>





                <Grid className="bg-amber-300" style={{backgroundColor: "white"}}>
                    <Grid.Col span={8} style={{marginTop: 12}}>
                        <Container>
                            <Progress
                                size="xl"
                                sections={[
                                    {value: currentStep*12.5 , color: '#25453F'}]}
                            />
                        </Container>

                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}} onClick={() => setCurrentStep(currentStep-1)}>Previous</Button>
                        {currentStep === 8 ? <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}} onClick={() => {}}>Finish</Button> : <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}} onClick={() => setCurrentStep(currentStep+1)}>Next</Button>}
                    </Grid.Col>
                </Grid>
            </Box>
        </Modal>
    )

}

export default ModalComponent