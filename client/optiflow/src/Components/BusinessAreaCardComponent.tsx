import {Box, Card, Image, ScrollArea, Text} from "@mantine/core";
import {useState} from "react";
import {BusinessArea} from "../models/BusinessArea";


interface BusinessAreaCardComponentProps {
    index: number,
    businessArea: BusinessArea,
    selected: boolean,
    setSelected: (index: number, selected: boolean) => void,
}

const BusinessAreaCardComponent = (props: BusinessAreaCardComponentProps) => {

    return (
        <Box style={{height: 350, display: 'flex', alignSelf: 'stretch'}}>
            <Card
                shadow="sm"
                component="b"
                style={{userSelect: 'none', flexGrow: 1, border: props.selected ? "1px solid #25453F" : ""}}
                className="flex flex-col justify-center items-center"
                onClick={() => {
                    props.setSelected(props.index, !props.selected)
                }}
            >
                <Text weight={700} size="lg" mt="md" className="text-center">
                    {props.businessArea.name}
                </Text>
                <ScrollArea h={250}>
                    <Text mt="xs" color="dimmed" size="sm" className="text-center pt-3">
                        {props.businessArea.description}
                    </Text>
                </ScrollArea>

            </Card>
        </Box>

    );

}

export default BusinessAreaCardComponent;