import {Box, Card, Container, Grid, Text} from "@mantine/core";

import {IconAccessible, IconLock, IconMoodSmile} from "@tabler/icons-react";


const AddNewProjectComponent = () => {

    return (
        <Card
            shadow="sm"
            component="b"
            style={{minHeight: 200}}
            className="flex flex-col justify-center items-center"
        >
            <Text weight={700} size="lg" mt="md" className="text-center">
                Add Project
            </Text>
            <Container className="pt-5">
                <IconAccessible/>
            </Container>


        </Card>

    )
}

export default AddNewProjectComponent;