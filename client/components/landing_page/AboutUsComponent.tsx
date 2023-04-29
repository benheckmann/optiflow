import {Card, Flex, Space, Text} from "@mantine/core";
import {useTranslation} from "next-i18next";
import {AboutUsRowComponent, AboutUsRowComponentProps} from "./AboutUsRowComponent";

const AboutUsComponent = () => {
    const {t} = useTranslation();

    const cards = t('indexPage.aboutCard.cards', {returnObjects: true}) as [AboutUsRowComponentProps];

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{fontSize: 25}}>
            <Text size={30} weight={500}>{t('indexPage.aboutCard.title')}</Text>
            <Space h={20}/>
            <Flex className="m-5" direction="column" align="center">
                {cards.map(card => (
                    <AboutUsRowComponent {...card} />
                ))}
            </Flex>
        </Card>
    );
};

export default AboutUsComponent;