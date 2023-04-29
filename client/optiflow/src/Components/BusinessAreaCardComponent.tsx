import {Box, Card, Image, Text} from "@mantine/core";
import {useState} from "react";


interface BusinessAreaCardComponentProps {
    name: string,
    description: string,
    selected: boolean,
    setSelected: (name: string, selected: boolean) => void,

}
const BusinessAreaCardComponent = (props: BusinessAreaCardComponentProps) => {

    return (
        <Box style={{height: '100%'}}>
            <Card
                shadow="sm"
                component="b"
                style={{userSelect: 'none', height: '100%', border: props.selected ? "1px solid #25453F" : ""}}
                className="flex flex-col justify-center items-center"
                onClick={() => {
                    props.setSelected(props.name, !props.selected)
                }}
            >
                <Text weight={700} size="lg" mt="md" className="text-center">
                    {props.name}
                </Text>
                <Text mt="xs" color="dimmed" size="sm" className="text-center pt-3">
                    {props.description}
                </Text>
            </Card>
        </Box>
    );

}

export default BusinessAreaCardComponent;