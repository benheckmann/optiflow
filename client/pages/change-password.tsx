import {useForm} from "@mantine/form";
import {Alert, Box, Button, Group, TextInput, Title} from "@mantine/core";
import {useTranslation} from "next-i18next";
import {supabase} from "../lib/Store";
import React, {useState} from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/navigation";

const PasswordRecovery = () => {
    const {t} = useTranslation();

    const router = useRouter();

    const [error, setError] = useState(null as null | string);

    const form = useForm({
        initialValues: {password: ""},
        validate: {
            password: (value) => value.length < 4 ? t('errors.passwordLength') : null
        }
    });

    const submit = (values: { password: string }) => {
        supabase.auth.updateUser({
            password: values.password,
        }).then((v) => {
            if (v.error) {
                // TODO: Localize
                setError(v.error.message);
            } else {
                router.replace('/overview');
            }
        });
    };

    return (
        <Box maw={400} mx="auto" pt={100}>
            <form onSubmit={form.onSubmit(submit)}>
                <Title mb={50} order={3} align="center">{t('password_reset.title')}</Title>
                {error ?
                    <Alert color="red">{error}</Alert>
                    : <></>}
                <TextInput label={t('password_reset.password_field.label')}
                           placeholder={`${t('password_reset.password_field.placeholder')}`}
                           type="password"
                           {...form.getInputProps('password')}/>
                <Group position="right" mt="md">
                    <Button type="submit">{t('password_reset.submit')}</Button>
                </Group>
            </form>
        </Box>
    );
}

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

export default PasswordRecovery;