import {Box, Button, Space, TextInput} from "@mantine/core";
import React, {useState} from "react";
import {UserSession} from "../models/UserSession";

interface UrlScrapingComponentProps {
    userSession: UserSession,
    setUserSession: (userSession: UserSession) => void;
}

const UrlScrapingComponent = (props: UrlScrapingComponentProps) => {
    const [name, setName] = useState("");
    const [url, setURL] = useState("")
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
                    defaultValue={props.userSession.name}
                    variant="filled"
                    size="md"
                    withAsterisk
                    onChange={(e) => setName(e.target.value)}
                    style={{width:"100%"}}
                />
                <Space h={10}/>
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
            <Button className="pt-10" style={{background: "#25453F"}} onClick={() => props.setUserSession({
                ...props.userSession,
                name: name,
                url: url
            })}>
                Start scraping
            </Button>
        </Box>

    )
}

export default UrlScrapingComponent;