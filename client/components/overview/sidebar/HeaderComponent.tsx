import {ActionIcon, Group, Header, Title} from "@mantine/core";
import {IconMenu2} from "@tabler/icons-react";
import React from "react";
import {useTranslation} from "next-i18next";

interface HeaderComponentProps {
    toggleSidebarOpen: () => void;
}

const HeaderComponent = (props: HeaderComponentProps) => {
    const {t} = useTranslation();

    return (
        <Header height={60}>
            <Group sx={{height: '100%'}} px={20}>
                <ActionIcon variant="default"
                            onClick={props.toggleSidebarOpen}
                            size={30}>
                    <IconMenu2 size={16}/>
                </ActionIcon>
                <Title order={1}
                       variant="gradient"
                       gradient={{from: 'indigo', to: 'cyan', deg: 45}}
                       sx={{fontFamily: 'Greycliff CF, sans-serif'}}
                       ta="center"
                       fw={700}
                >
                    {t('appName')}
                </Title>
            </Group>
        </Header>
    );
};

export default HeaderComponent;