import {Grid, Text} from "@mantine/core";
import React from "react";
import {UseCaseAccordionImageComponent, UseCaseAccordionImageComponentImage} from "./UseCaseAccordionImageComponent";

interface TextAndPictureAccordionComponentProps {
    image: UseCaseAccordionImageComponentImage;
    setPopup: (img: UseCaseAccordionImageComponentImage) => void;
}

const TextAndPictureAccordionComponent = (props: TextAndPictureAccordionComponentProps) => {
    return (
        <Grid justify={"space-evenly"}>
            <Grid.Col span={5} style={{display: 'flex', alignItems: 'center'}}>
                <Text className="text-center w-full">
                    {props.image.title}
                </Text>
            </Grid.Col >
            <Grid.Col span={5} className="rounded-5 bg-white shadow" style={{borderRadius: 10}}>
                <UseCaseAccordionImageComponent image={props.image} setPopup={props.setPopup} />
            </Grid.Col>
        </Grid>
    )


}

export default TextAndPictureAccordionComponent;