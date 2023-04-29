import type {NextPage} from 'next'
import {useEffect, useState} from "react";
import {Customer} from "../models/Customer";
import {Alert, Container, LoadingOverlay, Text, Center, Space, Divider} from "@mantine/core";
import {useRouter} from "next/router";
import CustomerService from "../services/CustomerService";
import {IconAlertCircle, IconUser, IconUsers} from "@tabler/icons-react";
import {TFunction, useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {getTimeLeftFunction} from "../helpers/Functions";
import {supabase} from "../lib/Store";
import {RealtimeChannel} from "@supabase/realtime-js";
import TitleText from "../components/landing_page/TitleText";

const custerMessageBuilder = (personsInQueue: number, t: TFunction) => {
    if (personsInQueue === 1) {
        return t('wait.peopleAhead.1');
    } else if (personsInQueue > 4) {
        return t('wait.peopleAhead.more');
    } else {
        return t('wait.peopleAhead.number', {count: personsInQueue});
    }
};

const personInQueue = (personsInQueue: number) => {
    if (personsInQueue > 4) {
        return <IconUsers color="#0099ff"/>;
    } else {
        return Array(personsInQueue).fill(null).map((_, index) => <IconUser size={50} key={index} color="#0099ff"/>);
    }
};

const wait: NextPage = () => {
    const {t} = useTranslation();

    const [customer, setCustomer] = useState(null as Customer | null);
    const [error, setError] = useState(null as string | null);

    const [remainingTime, setRemainingTime] = useState(0);
    const [isOvertime, setIsOvertime] = useState(false);
    const [personsAhead, setPersonsAhead] = useState(0);
    const [organisationName, setOrganisationName] = useState('');

    const [intervalId, setIntervalId] = useState(null as null | NodeJS.Timer);
    const [channel, setChannel] = useState(null as null | RealtimeChannel);

    const router = useRouter();

    const loadData = (id: string) => {
        CustomerService.fetchCustomersInSameQueue(id).then(([c, otherCustomers, organisation, queue]) => {
            setCustomer(c);
            setPersonsAhead(otherCustomers.length);
            setOrganisationName(organisation.name);

            const timeLeft = getTimeLeftFunction(queue.latest_appointment_start, otherCustomers, queue, c, setRemainingTime, setIsOvertime);

            setIntervalId(oldIntervalId => {
                if (oldIntervalId) {
                    clearInterval(oldIntervalId);
                }
                return setInterval(() => {
                    timeLeft();
                    console.log("interval", intervalId);
                }, 10000)
            });
            timeLeft();
        });
    }

    useEffect(() => {
        const id = router.query['id'] as string;
        if (id) {
            loadData(id);
            const realtimeChannel = supabase.channel('any').on('postgres_changes', {event: 'UPDATE', schema: 'public', table: 'customers'},
                _ => {
                    loadData(id);
                }).subscribe();
            setChannel(realtimeChannel);
        } else {
            setTimeout(() => {
                setError(t('errors.parameterMissing'));
            }, 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
            if (channel) {
                supabase.removeChannel(channel);
            }
        };
    }, [router.query]);

    return customer ? (
        <Container>
            <Container style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <TitleText size={60} style={{marginTop: 5}}></TitleText>
                <Center className="py-10">
                    <Text weight={500} size={50} className="text-blue-600 text-center">
                        {t('wait.welcomeMessage', {
                            organisation: organisationName,
                            customer: customer.name
                        })}
                    </Text>
                </Center>
                <Space h={80}/>
                {remainingTime > 0 ?
                    <>
                        <Container className={`${isOvertime ? "" : "blue-color"} text-center`} style={{
                            width: "250px",
                            height: "250px",
                            border: "25px solid",
                            borderRadius: "150px",
                            margin: "0 auto"
                        }}>
                            <Container style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }} className="h-full">
                                <Text className="pb-0 mb-0"
                                      style={{fontSize: 50, color: "black", fontWeight: "bold"}}>{remainingTime}</Text>
                                <Text className="text-black font-bold pt-0 mt-0"
                                      style={{fontSize: 30, color: "black", fontWeight: "bold"}}>min</Text>
                            </Container>

                        </Container>
                        <Center style={{marginTop: 40}}>
                            <Text className='pt-5' weight={500}
                                  style={{fontSize: 40}}>{t('wait.expectedWaitingTime')}</Text>
                        </Center>
                        <Space h={120}/>
                        <Center>
                            {personInQueue(personsAhead)}
                        </Center>
                        <Text className='text-center' weight={500} style={{fontSize: 40}}>
                            {custerMessageBuilder(personsAhead, t)}
                        </Text></>
                    : <>
                        <h1>{t('wait.soon')}</h1>
                    </>}
            </Container>

            <Divider my="sm"/>
            <Container>

            </Container>
            <Container className="h-100" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "90vh"
            }}>
                <Text className="text-center pt-5" weight={500} style={{fontSize: 40, color: "dimgray"}}>
                    {t("wait.informationAboutMeddy")}
                    <p className="pt-5"> {t("wait.contactUs")}</p>
                </Text>
                {/* TODO: Notifications
                        <div className="w-full flex justify-center">
                            <button
                                className="bg-blue hover:bg-blue-500 text-white justify-self-center border border-transparent text-xs py-2 px-4 rounded"
                                style={{width: "200px"}}>
                                Ich möchte benachrichtigt werden, wenn ich dran bin!
                            </button>
                        </div>
                        */}
            </Container>
        </Container>
    ) : error ? (
        <Container mt={50}>
            <Alert icon={<IconAlertCircle size="1rem"/>} title={t('errors.title')} color="red">
                {error}
            </Alert>
        </Container>
    ) : (
        <LoadingOverlay visible={true}/>






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

export default wait;