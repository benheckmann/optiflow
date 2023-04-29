import {Card, Center, Grid, Text, Box} from "@mantine/core";
import {IconAccessible, IconLock, IconMoodSmile} from "@tabler/icons-react";
import React from "react";
import {useTranslation} from "next-i18next";


const FeatureCards = () => {
    const {t} = useTranslation();
    return (
        <Box >
            <Center className="p-0 m-0">
                <Grid gutter="xl" className="text-center" justify="center">
                    <Grid.Col md={6} lg={4} className="w-full">
                        <Center className="h-full w-full">
                            <Card shadow="sm"
                                  style={{maxWidth: 600}}
                                  radius="md" withBorder
                                  className="h-full">
                                <Center className="pt-5">
                                    <IconAccessible size={50} className="blue-color"/>
                                </Center>
                                <Text className="pt-2" size={30} weight={500}>{t("indexPage.usability")}</Text>
                                <Text className="py-5" size={25} color="dimmed">
                                    {t("indexPage.usabilityText")}
                                </Text>
                            </Card>
                        </Center>
                    </Grid.Col>

                    <Grid.Col md={6} lg={4}>
                        <Center className="h-full">
                            <Card shadow="sm" style={{maxWidth: 600}} radius="md" withBorder className="h-full">
                                <Center className="pt-5">
                                    <IconLock size={50} className="blue-color"/>
                                </Center>
                                <Text className="pt-2" size={30} weight={500}>{t("indexPage.privacy")}</Text>
                                <Text className="py-5" size={25} color="dimmed">
                                    {t("indexPage.privacyText")}
                                </Text>
                            </Card>
                        </Center>

                    </Grid.Col>
                    <Grid.Col md={6} lg={4}>
                        <Center className="h-full">
                            <Card shadow="sm" style={{maxWidth: 600}} radius="md" withBorder className="h-full">
                                <Center className="pt-5">
                                    <IconMoodSmile size={50} className="blue-color"/>
                                </Center>
                                <Text className="pt-2" size={30} weight={500}>{t("indexPage.clientSatisfaction")}</Text>
                                <Text className="py-5" size={25} color="dimmed">
                                          {t("indexPage.clientSatisfactionText")}
                                </Text>
                            </Card>
                        </Center>

                    </Grid.Col>
                </Grid>
            </Center>
        </Box>

    )
}

export default FeatureCards;