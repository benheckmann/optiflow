import {Box, Card, Container, Grid, Image, Loader, Text} from "@mantine/core";
import ProjectComponent from "./ProjectComponent";
import AddNewProjectComponent from "./AddNewProjectComponent";
import {useEffect, useState} from "react";
import {Project} from "../models/Project";
import ProjectService from "./Service/ProjectService";

const ProjectsViewComponent = () => {

    const [projects, setProjects] = useState(null as Project[] | null);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect(() => {
            setIsLoading(true);
            ProjectService.getAllProjects().then(data => {
                setIsLoading(false);
                setProjects(data)
            })
    }, [projects, isLoading]
    )

    return (
        <Box className="h-full">
            {
                projects ?
                    <Container fluid className="h-full" style={{maxWidth: 1400}}>
                        <Grid className="pt-5">
                            {projects.map(project =>
                                <Grid.Col span={3}>
                                    <ProjectComponent name={project.name} description={project.description}/>
                                </Grid.Col>)
                            }yar
                            <Grid.Col span={3}>
                                <AddNewProjectComponent />
                            </Grid.Col>

                        </Grid>
                    </Container>
                    :
                    <Container className="text-white" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Loader color="white" />
                            <Text className="pt-5">Loading...</Text>
                        </div>
                    </Container>

            }
        </Box>
    )

}

export default ProjectsViewComponent;