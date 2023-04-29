import {ActionIcon, Button, Card, Group, Modal, Text, TextInput} from "@mantine/core";
import {IconX} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {Queue} from "../../models/Queue";
import {StoreContext, useStore} from "../../lib/Store";
import React, {useContext, useState} from "react";
import {useTranslation} from "next-i18next";


interface QueueManagementProps {
    isOpen: boolean,
    onClose: () => void
}

export const QueueManagement = (props: QueueManagementProps) => {
    const {t} = useTranslation();

    const form = useForm({
        initialValues: {name: ""},
        validate: {
            name: (value) => (value.length < 3 ? t('errors.invalidName') : null)
        }
    });
    const [showConfirmation, setShowConfirmation] = useState(null as Queue | null);
    const [showDeleteError, setShowDeleteError] = useState(false);

    const {queues, createQueue, deleteQueue} = useContext(StoreContext);

    const handleDeleteQueue = (queueId: number) => {
        deleteQueue(queueId)
            .finally(() => setShowConfirmation(null))
            .catch(() => {
                setShowDeleteError(true);
            });
    };

    return (
        <Modal opened={props.isOpen} onClose={props.onClose} size={"sm"} title={t('sidebar.manageQueues')}>
            {queues.sort((q1, q2) => q1.name.localeCompare(q2.name)).map((queue) => {
                const queueId = queue.id;
                return <Card className="mt-1" p="xs" radius="sm" withBorder key={queueId}>
                    <Group position="apart">
                        <Text style={{userSelect: "none"}} weight={500}>{queue.name}</Text>
                        <ActionIcon onClick={() => setShowConfirmation(queue)}>
                            <IconX size={32}/>
                        </ActionIcon>
                    </Group>
                </Card>
            })}
            <Modal
                title={t('queueManagement.confirmDelete.title')}
                opened={showConfirmation !== null}
                onClose={() => setShowConfirmation(null)}>
                <Text>{t('queueManagement.confirmDelete.text', {name: showConfirmation?.name})}</Text>
                <Group className="pt-4" position="center">
                    <Button color="green"
                            onClick={() => handleDeleteQueue(showConfirmation?.id ?? -1)}>{t('confirm')}</Button>
                    <Button color="red" onClick={() => setShowConfirmation(null)}>{t('cancel')}</Button>
                </Group>
            </Modal>
            <Modal
                title={t('queueManagement.failedDelete.title')}
                opened={showDeleteError}
                onClose={() => setShowDeleteError(false)}>
                <Text>{t('queueManagement.failedDelete.text', {name: showConfirmation?.name})}</Text>
                <Group className="pt-4" position="center">
                    <Button color="gray" onClick={() => setShowDeleteError(false)}>{t('close')}</Button>
                </Group>
            </Modal>
            <Group>
                <form onSubmit={form.onSubmit((val) => {
                    // TODO: Handle errors
                    createQueue(val.name);
                    form.reset();
                })}>
                    <div className="flex-row flex gap-2 mt-3">
                        <TextInput
                            style={{width: 220}}
                            placeholder={t('queueManagement.newQueue') ?? ""}
                            {...form.getInputProps("name")}
                        />
                        <Button type="submit">{t('add')}</Button>
                    </div>
                </form>
            </Group>
        </Modal>
    );
};