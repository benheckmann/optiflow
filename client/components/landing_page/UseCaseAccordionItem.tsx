import {Accordion, Text} from "@mantine/core";
import React, {ReactNode} from "react";

interface UseCaseAccordionItemProps {
    title: string;
    index: string;
    icon: ReactNode;
    children: ReactNode;
}

export const UseCaseAccordionItem = (props: UseCaseAccordionItemProps) => {
    return (
    <Accordion.Item value={props.index} className="text-start">
        <Accordion.Control icon={props.icon}><Text
            style={{fontSize: 30}}
            weight={500}>{props.title}</Text></Accordion.Control>
        <Accordion.Panel>
            {props.children}
        </Accordion.Panel>
    </Accordion.Item>);
}