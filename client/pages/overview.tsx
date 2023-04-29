import React, {useState} from 'react';
import Dashboard from "../components/overview/Dashboard";
import {StoreProvider} from "../lib/Store";
import {AppShell} from "@mantine/core";
import SidebarComponent from "../components/overview/sidebar/SidebarComponent";
import HeaderComponent from "../components/overview/sidebar/HeaderComponent";
import {QueueManagement} from "../components/overview/QueueManagement";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {AuthProvider} from "../lib/Auth";
import {NextPage} from "next";


const Overview: NextPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openedQueueManagement, setOpenedQueueManagement] = useState(false);


    return (
        <AuthProvider>
                <StoreProvider>
                    <AppShell
                        padding="md"
                        fixed={false}
                        navbar={sidebarOpen ?
                            <SidebarComponent openQueueManagement={() => setOpenedQueueManagement(true)}/> : <></>}
                        header={<HeaderComponent toggleSidebarOpen={() => setSidebarOpen(!sidebarOpen)}/>}
                    >
                        <Dashboard/>
                    </AppShell>
                    <QueueManagement isOpen={openedQueueManagement} onClose={() => setOpenedQueueManagement(false)}
                    />
                </StoreProvider>
        </AuthProvider>

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

export default Overview;
