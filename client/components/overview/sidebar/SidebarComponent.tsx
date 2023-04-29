import {Navbar} from "@mantine/core";
import {SidebarTextField} from "./SidebarTextField";
import {IconDeviceDesktop, IconLogout, IconSubtask} from "@tabler/icons-react";
import React, {useContext} from "react";
import {StoreContext} from "../../../lib/Store";
import {SidebarConfirm} from "./SidebarConfirm";
import SidebarButton from "./SidebarButton";
import {useTranslation} from "next-i18next";
import {useAuth} from "../../../lib/Auth";
import {useRouter} from "next/router";
import {ROUTE_CHANGE_PASSWORD} from "../../../helpers/Routes";

interface SidebarComponentProps {
    openQueueManagement: () => void;
}

const SidebarComponent = (props: SidebarComponentProps) => {
    const {t} = useTranslation();

    const router = useRouter();

    const {organisation, updateOrganisation} = useContext(StoreContext);
    const { signOut } = useAuth();

    const changePassword = () => {
        router.push(ROUTE_CHANGE_PASSWORD);
    }

    // wait for organisation to initialise, otherwise default text is set to zero
    return organisation.name ? (
        <Navbar width={{base: 300}} p="xs">
            <Navbar.Section grow mt="xs">
                <SidebarTextField initialText={organisation.name} label={t('sidebar.changeOrganisationName')}
                                  editLabel={t('sidebar.organisationName')}
                                  onConfirm={(newValue) => updateOrganisation(newValue)} icon={<IconDeviceDesktop/>}
                                  iconColor="violet"/>
                {/* TODO: Integrate device name editor
                    <SidebarConfirm initialText="" label="Gerätenamen ändern" editLabel="Gerätename"
                                   onConfirm={() => {
                                   }} icon={<IconDeviceMobile/>} iconColor="teal"/>
                */}
                {/* TODO: Integrate languages
                <SidebarTextField initialText="" label="Sprache ändern" editLabel="Sprache"
                                  onConfirm={() => {
                                  }} icon={<IconFlag/>} iconColor="yellow"/>
                */}
                <SidebarButton icon={<IconSubtask/>} iconColor="yellow" label={t('sidebar.manageQueues')}
                               onClick={props.openQueueManagement}/>
                <SidebarButton icon={<IconSubtask/>} iconColor="orange" label={t('sidebar.changePassword')}
                               onClick={changePassword}/>
                <SidebarConfirm initialText="" label={t('logout')} confirmLabel={t('logout')}
                                onConfirm={signOut} icon={<IconLogout/>} iconColor="red"/>
            </Navbar.Section>
        </Navbar>
    ) : (<></>);
};

export default SidebarComponent;