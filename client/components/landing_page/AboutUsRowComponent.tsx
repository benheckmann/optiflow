import {Button, Col, Flex, Grid, Image, Text} from "@mantine/core";
import {useTranslation} from "next-i18next";

export interface AboutUsRowComponentProps {
    name: string;
    bio: string;
    email: string;
    image: string;
    linkedIn: string;
}

export const AboutUsRowComponent = (props: AboutUsRowComponentProps) => {
    const {t} = useTranslation();

    return (
        <Grid className="text-start w-full py-4">
            <Col span="content">
                <Image height={80} width={80} radius={40} src={props.image}/>
            </Col>
            <Col span="auto">
                <Grid justify="space-evenly">
                    <Grid.Col span={12} lg={8}>
                        <Text weight={700}>{props.name}</Text>
                        <Text color="dimmed">{props.email}</Text>
                    </Grid.Col>
                    <Grid.Col span={12} lg={4}>
                        <Flex align="center" justify="flex-start">
                            <Button size={"lg"}
                                    onClick={() => window.open(props.linkedIn, '_blank')}>{t('indexPage.aboutCard.linkedIn')}</Button>
                        </Flex>
                    </Grid.Col>
                </Grid>
                <Text className="pt-4">{props.bio}</Text>
            </Col>
        </Grid>
    );
};