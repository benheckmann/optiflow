import {Button, Container, Popover} from "@mantine/core";
import React, {useState} from "react";
import SidebarButton from "./SidebarButton";

interface SidebarButtonProps {
    icon: JSX.Element;
    iconColor: string;
    initialText: string;
    label: string;
    confirmLabel: string;
    onConfirm: () => void;
}

export const SidebarConfirm = (props: SidebarButtonProps) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <Popover trapFocus
                 position="bottom"
                 withArrow
                 opened={isPopupOpen}
                 onClose={() => setPopupOpen(false)}
                 shadow="md">
            <Popover.Target>
                {SidebarButton({
                    icon: props.icon, iconColor: props.iconColor, label: props.label,
                    onClick: () => setPopupOpen(!isPopupOpen)
                })}
            </Popover.Target>
            <Popover.Dropdown sx={(theme) => ({background: theme.white})}>
                <Container>
                    <Button color="red" onClick={() => {
                        props.onConfirm();
                        setPopupOpen(false);
                    }}>
                        {props.confirmLabel}
                    </Button>
                    {/*
                    <Button color="red" onClick={() => setPopupOpen(false)}>
                        Abbrechen
                    </Button>
                    */}
                </Container>
            </Popover.Dropdown>
        </Popover>
    );
};