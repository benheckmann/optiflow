import {Box, Modal, useMantineTheme} from "@mantine/core";
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
            name: "Scraping",
            component: <Box></Box>
        },
        {
            step: 2,
            name: "Business Areas",
            component: <Box></Box>
        },
        {
            step: 3,
            name: "Workflows",
            component: <Box></Box>
        },
        {
            step: 4,
            name: "Questions",
            component: <Box></Box>
        }
    ];


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

            <Box className="h-full" style={{height: 700}}>
                {currentStep === 1 ?
                    <Box className="" style={{ height: "100%" }}>
                        <UrlScrapingComponent />
                    </Box>
                    :
                    currentStep === 2 ?
                        <Box></Box>
                        :
                        currentStep === 3 ?
                            <Box></Box>
                            :
                            currentStep === 4 ?
                                <Box></Box>
                                : <Box></Box>
                }

            </Box>
        </Modal>
    )
}

export default ModalComponent