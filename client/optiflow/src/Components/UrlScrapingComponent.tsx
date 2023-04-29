import {Box, Button, Space, TextInput} from "@mantine/core";
import React from "react";

const UrlScrapingComponent = () => {
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
                    variant="filled"
                    size="md"
                    withAsterisk
                    style={{width:"100%"}}
                />
                <Space h={10}/>
                <TextInput
                    placeholder="www.example.com"
                    label="URL"
                    variant="filled"
                    size="md"
                    withAsterisk
                    style={{width:"100%"}}
                />
                <Space h={30}/>
            </Box>
            <Button className="pt-10" style={{background: "#25453F"}}>
                Start scraping
            </Button>
        </Box>

    )
}

export default UrlScrapingComponent;