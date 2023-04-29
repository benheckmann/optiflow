import {Box, Button, Space, Text, Title} from "@mantine/core";
import React from "react";
import {useTranslation} from "next-i18next";
import {useDisclosure} from "@mantine/hooks";

const UserStoryComponent = () => {
    const {t} = useTranslation();
    const [opened, {toggle}] = useDisclosure(false);

    return (
        <Box>
            <Title weight={500}>{t("indexPage.userStory.title")}</Title>
            <Space h={50}/>
            <Text style={{
                fontSize: 30,
                maxHeight: opened ? "100%" : "230px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: opened ? 40 : 5,
                WebkitBoxOrient: "vertical",
                transition: "all 0.5s ease 0s"
            }}>
                {t("indexPage.userStory.aboutUs")}
            </Text>
            <Button size={"xl"} className="m-10" onClick={toggle}>
                {opened ? t("indexPage.userStory.closeStory") : t("indexPage.userStory.readStory")}
            </Button>
        </Box>
    );
}

export default UserStoryComponent;