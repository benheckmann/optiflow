import {Box, Button, Flex, Grid, Modal, Progress, Space, TextInput, useMantineTheme} from "@mantine/core";
import React, {useState} from "react";
import UrlScrapingComponent from "./UrlScrapingComponent";

interface ModalComponentProps {
    opened: boolean,
    setOpened: (opened: boolean) => void
}

const ModalComponent = (props: ModalComponentProps) => {
    const theme = useMantineTheme();
    const [currentStep, setCurrentStep] = useState(1);
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
            onClose={() => props.setOpened(false)}
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


                {currentStep === 1 ?
                    <Box className="" style={{ height: "90%" }}>
                       <UrlScrapingComponent/>
                    </Box>
                    :
                    currentStep === 2 ?
                        <Box ></Box>
                        :
                        currentStep === 3 ?
                            <Box></Box>
                            :
                            currentStep === 4 ?
                                <Box></Box>
                                : <Box></Box>
                }


                    <Grid >
                        <Grid.Col span={8}><Progress
                            size="xl"
                            sections={[
                                {value: 20, color: 'cyan'},
                                {value: 20, color: 'blue'}, {
                                    value: 15,
                                    color: 'indigo'
                                },]}
                        /></Grid.Col>
                        <Grid.Col span={4}>
                            <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}}>Previous</Button>
                            <Button style={{width: 100, backgroundColor: "#25453F", margin: 4}}>Next</Button>
                        </Grid.Col>
                    </Grid>


            </Box>
        </Modal>
    )
}

export default ModalComponent