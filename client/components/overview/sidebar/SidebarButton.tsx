import {Group, Text, ThemeIcon, UnstyledButton} from "@mantine/core";
import React from "react";

interface SidebarButtonProps {
    icon: JSX.Element;
    iconColor: string;
    label: string;
    onClick: () => void;
}

const SidebarButton = (props: SidebarButtonProps) => (
    <UnstyledButton
        sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

            '&:hover': {
                backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            },
        })}
        onClick={props.onClick}
    >
        <Group>
            <ThemeIcon color={props.iconColor} variant="light">{props.icon}</ThemeIcon>
            <Text size="sm">{props.label}</Text>
        </Group>
    </UnstyledButton>
);

export default SidebarButton;