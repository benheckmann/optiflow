import {Card, Container, Flex, Text} from '@mantine/core';
import {IconAt, IconPhone, IconWorld} from '@tabler/icons-react';
import {useTranslation} from "next-i18next";
import {ContactUsRowComponent} from "./ContactUsRowComponent";


const ContactUsComponent = () => {
    const {t} = useTranslation();

     // TODO: Flex is too large

    return (
        <Card className="w-full h-full" shadow="sm" padding="lg" radius="md" withBorder
              style={{fontSize: 25}} id="contact">
            <Text size={30} weight={500}>{t('indexPage.contactCard.title')}</Text>
            <Container fluid className="align-middle" style={{height: "calc(100% - 47px)"}}>
                <Flex align="flex-start" direction="column" justify="center" className="h-full">
                    <ContactUsRowComponent title={t('indexPage.contactCard.email')}
                                           text={<a href={`mailto:${t('indexPage.contactCard.emailAddress')}`}>
                                               {t('indexPage.contactCard.emailAddress')}</a>}
                                           icon={<IconAt size={40} className="blue-color"/>}/>
                    <ContactUsRowComponent title={t('indexPage.contactCard.telephone')}
                                           text={t('indexPage.contactCard.telephoneNumber')}
                                           icon={<IconPhone size={40} className="blue-color"/>}/>
                </Flex>
            </Container>

        </Card>
    )

}
export default ContactUsComponent;