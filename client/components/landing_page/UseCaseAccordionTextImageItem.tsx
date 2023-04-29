import {Flex, Grid, Group, List} from "@mantine/core";
import React, {ReactNode} from "react";
import {UseCaseAccordionImageComponent, UseCaseAccordionImageComponentImage} from "./UseCaseAccordionImageComponent";
import {UseCaseAccordionItem} from "./UseCaseAccordionItem";

interface UseCaseAccordionTextImageItemProps {
    title: string;
    index: string;
    icon: ReactNode;

    image: UseCaseAccordionImageComponentImage;
    setPopup: (img: UseCaseAccordionImageComponentImage) => void;
    listItems: string[]
}

export const UseCaseAccordionTextImageItem = (props: UseCaseAccordionTextImageItemProps) => (
    <UseCaseAccordionItem {...props}>
        <Grid justify={"space-evenly"} gutter={50} gutterLg={0}>
            <Grid.Col md={12} lg={6}>
                <Flex align="center" justify="center" className="h-full">
                    <List type="ordered" size={"xxl"}>
                        {props.listItems.map((item, index) => (
                            <List.Item key={index}>{item}</List.Item>
                        ))}
                    </List>
                </Flex>
            </Grid.Col>
            <Grid.Col md={8} lg={4}>
                <Group position="center">
                    <UseCaseAccordionImageComponent image={props.image} setPopup={props.setPopup}/>
                </Group>
            </Grid.Col>
        </Grid>
    </UseCaseAccordionItem>
);