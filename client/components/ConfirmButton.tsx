import {Button, Popover} from "@mantine/core";
import React from "react";
import {useTranslation} from "next-i18next";

interface ConfirmButtonProps {
    label: string;
    color: string;
    fullWidth: boolean;
    onClick: () => void;
    disabled?: boolean
}

const ConfirmButton = (props: ConfirmButtonProps) => {
    const {t} = useTranslation();

    return (
        <Popover trapFocus position="bottom" withArrow shadow="md">
            <Popover.Target>
                <Button disabled={props.disabled} color={props.color} fullWidth={props.fullWidth}>
                    {props.label}
                </Button>
            </Popover.Target>
            <Popover.Dropdown sx={(theme) => ({background: theme.white})}>
                <Button color="gray" onClick={props.onClick}>
                    {t('confirm')}
                </Button>
            </Popover.Dropdown>
        </Popover>
    );
};

export default ConfirmButton;