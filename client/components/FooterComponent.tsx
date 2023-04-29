import {Center, Grid} from "@mantine/core";
import TitleText from "./landing_page/TitleText";
import {useTranslation} from "next-i18next";

const FooterComponent = () => {
    const {t} = useTranslation();

    return (
        <footer className="relative h-24 w-full items-center justify-center border-t p-5">
            <TitleText/>
            <Center>
                <Grid className="underline">
                    <Grid.Col span={"auto"}>
                        <a href="/">{t('footer.home')}</a>
                    </Grid.Col>
                    <Grid.Col span={"auto"}>
                        <a href="/imprint">{t('footer.imprint')}</a>
                    </Grid.Col>
                    <Grid.Col span={"auto"}>
                        <a href="/privacy">{t('footer.privacy')}</a>
                    </Grid.Col>
                    <Grid.Col span={"auto"}>
                        <a href="mailto:info@meddy.me">{t('footer.contact')}</a>
                    </Grid.Col>
                </Grid>
            </Center>
        </footer>
    )
};

export default FooterComponent;