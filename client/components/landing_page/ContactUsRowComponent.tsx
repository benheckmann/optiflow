import {ReactNode} from "react";
import {Box, Group, Text} from "@mantine/core";

interface ContactUsRowComponentProps {
    title: string;
    text: ReactNode;
    icon: ReactNode;
}

export const ContactUsRowComponent = (props: ContactUsRowComponentProps) => (
    <Group className="m-5">
        {props.icon}
        <Box className="text-start">
            <Text weight={500} size="lg" color="dimmed">{props.title}</Text>
            <Text weight={500}>{props.text}</Text>
        </Box>
    </Group>
)