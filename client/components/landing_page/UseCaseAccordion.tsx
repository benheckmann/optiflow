import {Accordion, Image, Modal, Space} from "@mantine/core";
import {IconPencil, IconQrcode, IconUserCheck} from "@tabler/icons-react";
import React, {useState} from "react";
import {useTranslation} from "next-i18next";
import TextAndPictureAccordionComponent from "./TextAndPictureAccordionComponent";
import {UseCaseAccordionItem} from "./UseCaseAccordionItem";
import {UseCaseAccordionTextImageItem} from "./UseCaseAccordionTextImageItem";

const UseCaseAccordion = () => {
    const {t} = useTranslation();

    const [popup, setPopup] = useState(null as null | { title: string, src: string });

    const images = [
        {
            title: t('indexPage.accordion.checkinCustomer'),
            src: "/images/check_in_customer.png"
        },
        {
            title: t('indexPage.accordion.checkinCustomer'),
            src: "/images/waiting_view.png"
        },
        {
            title: t('indexPage.accordion.changeOrder'),
            src: "/images/change_order.png"
        },
        {
            title: t('indexPage.accordion.editCustomer'),
            src: "/images/edit_customer.png"
        },
        {
            title: t('indexPage.accordion.queueManagement'),
            src: "/images/queue_management.png"
        }
    ];

    return (
        <>
            <Modal size={"xl"} opened={popup !== null}
                   onClose={() => setPopup(null)}
                   title={popup?.title}>
                <Image src={popup?.src}/>
            </Modal>

            <Accordion className="pt-5" variant="filled" defaultValue="1" style={{fontSize: 25, fontWeight: 500}}>
                <UseCaseAccordionTextImageItem index="1" icon={<IconUserCheck className="blue-color" size={35}/>}
                                               title={t("indexPage.checkInToggle")} image={images[0]}
                                               setPopup={setPopup}
                                               listItems={t('indexPage.checkinSteps', {returnObjects: true})}/>

                <UseCaseAccordionTextImageItem index="2" icon={<IconQrcode className="blue-color" size={35}/>}
                                               title={t("indexPage.scanQRToggle")} image={images[1]}
                                               setPopup={setPopup}
                                               listItems={t('indexPage.QRCodeSteps', {returnObjects: true})}/>

                <UseCaseAccordionItem index="3" icon={<IconPencil className="blue-color" size={35}/>}
                                      title={t("indexPage.queueManagement")}>
                    {images.slice(2).map(image => (
                        <>
                            <Space h={50}/>
                            <TextAndPictureAccordionComponent image={image} setPopup={setPopup}/>
                        </>
                    ))}
                </UseCaseAccordionItem>
            </Accordion>
        </>
    )

}

export default UseCaseAccordion;