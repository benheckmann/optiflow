import {Image} from "@mantine/core";
import React from "react";

export interface UseCaseAccordionImageComponentImage {
    title: string;
    src: string;
}

interface UseCaseAccordionImageComponentProps {
    image: UseCaseAccordionImageComponentImage;
    setPopup: (img: UseCaseAccordionImageComponentImage) => void;
}

export const UseCaseAccordionImageComponent = (props: UseCaseAccordionImageComponentProps) => (
    <Image onClick={() => props.setPopup(props.image)} src={props.image.src}/>
);