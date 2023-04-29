import {NextPage} from "next";
import React from "react";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Box, Center, Container, Grid, Space, Text} from '@mantine/core';
import {useTranslation} from "next-i18next";
import HeroComponent from "../components/landing_page/WebsiteImage";
import FeatureCards from "../components/landing_page/FeatureCards";
import UseCaseAccordion from "../components/landing_page/UseCaseAccordion";
import UserStoryComponent from "../components/landing_page/UserStoryComponent";
import ContactUsComponent from "../components/landing_page/ContactUsComponent";
import AboutUsComponent from "../components/landing_page/AboutUsComponent";


const Index: NextPage = () => {
    const {t} = useTranslation();

    return (
        <Box>
            <HeroComponent/>
            <Container className="h-full" style={{maxWidth: 1500}} px={20}>
                <Space h={100}/>
                <Text className="font-bold text-center py-10" size={60}>{t("indexPage.mission")}</Text>
                <Container fluid className="text-center m-0">
                    <Text className="text-center" size={35}>{t("indexPage.useCase")}</Text>
                    <Space h={100}/>
                    <FeatureCards/>
                    <Space h={100}/>
                    <Text className="text-center" size={30}>
                        {t("indexPage.productDescription")}
                    </Text>
                    <Space h={100}/>
                    <Container fluid className="p-5 text-xl bg-white shadow-md rounded-xl" style={{borderWidth: 1}}>
                        <Center>
                            <Text size={35} weight={500}>{t("indexPage.applicationQuestion")}</Text>
                        </Center>
                        <UseCaseAccordion/>
                    </Container>
                    <Space h={200}/>
                    <UserStoryComponent/>
                    <Space h={200}/>
                    <Grid gutter={20} className="w-full" justify={"center"}>
                        <Grid.Col md={5} lg={5} span={12}>
                            <ContactUsComponent/>
                        </Grid.Col>
                        <Grid.Col md={7} lg={7} span={12}>
                            <AboutUsComponent/>
                        </Grid.Col>
                    </Grid>
                    <Space h={200}/>
                </Container>
            </Container>
        </Box>
    );
};

export async function getStaticProps({locale}: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ])),
            // Will be passed to the page component as props
        },
    }
}

export default Index;