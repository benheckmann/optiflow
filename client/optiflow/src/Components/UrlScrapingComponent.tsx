import {Box, Button, Space, TextInput} from "@mantine/core";
import React, {useState} from "react";
import {UserSession} from "../models/UserSession";

interface UrlScrapingComponentProps {
    userSession: UserSession,
    setUserSession: React.Dispatch<React.SetStateAction<UserSession>>;
}

const UrlScrapingComponent = (props: UrlScrapingComponentProps) => {

    const [projectName, setProjectName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [url, setURL] = useState("")

    const update = () => {
        props.setUserSession((userSession: UserSession) => {
            return {
                ...userSession,
                projectName,
                companyName,
                name
            } as UserSession;
        })
    }

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            textAlign: "center" // added property
        }}>
            <Box style={{minWidth: 200, width:300, textAlign: "start"}}>
                <TextInput
                    placeholder="Project Name"
                    label="Project Name"
                    defaultValue={props.userSession.projectName}
                    variant="filled"
                    size="md"
                    withAsterisk
                    onChange={(e) => setProjectName(e.target.value)}
                    style={{width:"100%"}}
                />
                <Space h={15}/>
                <TextInput
                    placeholder="Company Name"
                    label="Company Name"
                    defaultValue={props.userSession.projectName}
                    variant="filled"
                    size="md"
                    withAsterisk
                    onChange={(e) => setCompanyName(e.target.value)}
                    style={{width:"100%"}}
                />
                <Space h={15}/>
                <TextInput
                    placeholder="www.example.com"
                    label="URL"
                    defaultValue={props.userSession.url}
                    variant="filled"
                    size="md"
                    withAsterisk
                    onChange={(e) => setURL(e.target.value)}
                    style={{width:"100%"}}
                />
                <Space h={30}/>
            </Box>
        </Box>

    )
}

export default UrlScrapingComponent;