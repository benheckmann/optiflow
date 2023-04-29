import {Text} from "@mantine/core";
import React, {CSSProperties} from "react";
import {useTranslation} from "next-i18next";

interface TitleTextProps {
    size?: number,
    style?: CSSProperties
}

const TitleText = (props: TitleTextProps) => {
    const {t} = useTranslation();

    return (
        <Text
            variant="gradient"
            gradient={{from: 'indigo', to: 'cyan', deg: 45}}
            sx={{fontFamily: 'Greycliff CF, sans-serif'}}
            ta="center"
            size={props.size}
            style={props.style}
            fw={700}
        >{t('appName')}</Text>
    )
}

export default TitleText;