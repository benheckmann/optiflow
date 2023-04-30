import {Box, Container, Grid, Divider, Menu, Space, Text, Button} from "@mantine/core";
import {UserSession} from "../models/UserSession";

interface SummaryPageComponentProps {
    userSession: UserSession;

}

const SummaryPageComponent = (props: SummaryPageComponentProps) => {

    return (
        <Box style={{height: 700}}>
            <Container>
                <Text weight={700} size={40}>Project Overview</Text>
                <Space h={50}/>
                <Text size={20} weight={500}>
                    <Grid style={{width: "100%"}}>
                        <Grid.Col span={6}><Text>Project Name:</Text></Grid.Col>
                        <Grid.Col span={6}><Text weight={700}>{props.userSession.projectName}</Text></Grid.Col>
                    </Grid>
                    <Grid style={{width: "100%"}}>
                        <Grid.Col span={6}><Text>Company Name: </Text></Grid.Col>
                        <Grid.Col span={6}><Text weight={700}>{props.userSession.companyName}</Text></Grid.Col>
                    </Grid>
                    <Grid style={{width: "100%"}}>
                        <Grid.Col span={6}><Text>Website: </Text></Grid.Col>
                        <Grid.Col span={6}><Text weight={700}>{props.userSession.url}</Text></Grid.Col>
                    </Grid>
                    <Space h={30}/>
                    <Text>Company Profile of the Project:</Text>
                    <Container style={{background: "lightgray", borderRadius:5}}>
                        <Text  >{props.userSession.companyProfile}
                        </Text>
                    </Container>
                    <Space h={50}/>
                    <Divider/>
                    <Space h={30}/>
                    <Grid style={{width: "100%"}}>
                        <Grid.Col span={6}><Text>Industry: </Text></Grid.Col>
                        <Grid.Col span={6}><Text weight={700}>{props.userSession.industry}</Text></Grid.Col>
                    </Grid>
                    <Grid style={{width: "100%"}}>
                        <Grid.Col span={6}><Text>Business Area: </Text></Grid.Col>
                        <Grid.Col span={6}><Text weight={700}>{props.userSession.business_areas[props.userSession.selected_business_area].title}</Text></Grid.Col>
                    </Grid>
                    <Grid style={{width: "100%"}}>
                        <Grid.Col span={6}><Text>Process: </Text></Grid.Col>
                        <Grid.Col span={6}><Text weight={700}>{props.userSession.workflows[props.userSession.selected_workflow].title}</Text></Grid.Col>
                    </Grid>
                    <Space h={20}/>
                    <Text>Detailed Project Summary</Text>
                    <Container style={{background: "lightgray", borderRadius:5}}>
                        <Text  >{props.userSession.summary}
                        </Text>
                    </Container>
                    <Space h={50}/>
                    <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button size={"md"} style={{ background: "#25453F", margin: 4 }}>Share</Button>
                        <Button size={"md"} style={{ background: "#25453F", margin: 4 }}>Print</Button>
                    </Container>

                </Text>
            </Container>


        </Box>
    )

}

export default SummaryPageComponent