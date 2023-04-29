import {Box, Card, Container, Grid, Text} from "@mantine/core";




const AddNewProjectComponent = () => {

    return (
        <Card   shadow="sm"
                component="b"
                style={{minHeight: 200}}
                className="flex flex-col justify-center items-center">
            <Text weight={700} size="lg" mt="md" className="text-center pt-2">
                Add Project
            </Text>
            <Container className="pt-3 pl-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-plus" width="60"
                     height="60" viewBox="0 0 40 40" stroke-width="2" stroke="currentColor" fill="none"
                     stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M9 12l6 0"></path>
                    <path d="M12 9l0 6"></path>
                </svg>

            </Container>


        </Card>

    )
}

export default AddNewProjectComponent;