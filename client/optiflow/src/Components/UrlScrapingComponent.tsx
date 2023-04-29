import {Box, TextInput} from "@mantine/core";

const UrlScrapingComponent = () => {
    return (
        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <TextInput
                placeholder="Project Name"
                label="Project Name"
                variant="filled"
                size="md"
                withAsterisk
            />
            <TextInput
                placeholder="www.example.com"
                label="URL"
                variant="filled"
                size="md"
                withAsterisk
            />
        </Box>
    )
}

export default UrlScrapingComponent;