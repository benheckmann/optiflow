import {Alert, Box, Button, Flex, LoadingOverlay, PasswordInput, TextInput, Title} from '@mantine/core';
import {customLabel} from "../../helpers/Functions";
import {useForm} from "@mantine/form";
import {IconAt} from "@tabler/icons-react";
import React, {useState} from "react";
import {useTranslation} from "next-i18next";
import {supabase} from "../../lib/Store";


const Login = () => {
    const {t} = useTranslation();

    // either login or password reset
    const [isLogin, setLogin] = useState(true);
    const [message, setMessage] = useState(false as [string, string] | boolean);

    const form = useForm({
        initialValues: {email: '', password: ''},

        // functions will be used to validate values at corresponding key
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : t('errors.invalidEmail')),
            password: (value) => !isLogin ? null :
                (value.length < 4 ? t('errors.passwordLength') : null),

        },
    });

    const submit = (values: { email: string, password: string }) => {
        setMessage(true);
        if (isLogin) {
            supabase.auth.signInWithPassword(values).then((response) => {
                if (response.error) {
                    setMessage([t('errors.loginFailed'), "red"]);
                } else {
                    setMessage(false);
                }
            });
        } else {
            supabase.auth.resetPasswordForEmail(values.email).then((response) => {
                if (response.error) {
                    // TODO: Localize
                    setMessage([response.error.message, "red"]);
                } else {
                    setMessage([t('login.password_reset_success'), "green"])
                }
            });
        }
    }

    return (
        <Box sx={{maxWidth: 340}} mx="auto" pt={100}>
            {/* TODO: Color */}
            <Title align="center" color="#0099ff" order={3} mb={50}>{t('login.title')}</Title>
            {typeof message !== "boolean" ?
                <Alert color={message[1]}>{message[0]}</Alert>
                : <></>}
            <form onSubmit={form.onSubmit(submit)}>
                <LoadingOverlay visible={message === true}/>
                <TextInput
                    label={customLabel("E-Mail:", true)}
                    placeholder="Your email" icon={<IconAt/>}
                    {...form.getInputProps('email')}/>
                {isLogin ?
                    <PasswordInput
                        label={customLabel("Password", true)}
                        placeholder="Password"
                        {...form.getInputProps('password')}
                    /> : <></>}
                <Flex justify="center" mt="md" direction="column" gap="md">
                    <Button
                        type="submit">{isLogin ? t('password_reset.submit') : t('login.reset_password_text')}</Button>
                    <Button variant="subtle"
                            onClick={() => setLogin(!isLogin)}>{isLogin ? t('login.reset_password_text') : t('password_reset.submit')}</Button>
                </Flex>
            </form>
        </Box>
    );

};

export default Login;



