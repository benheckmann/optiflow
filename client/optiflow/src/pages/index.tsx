import type {NextPage} from "next";
import {Box} from '@mantine/core';
import HeaderComponent from "../Components/HeaderComponent";
import ProjectsViewComponent from "../Components/ProjectsViewComponent";

const Home: NextPage = () => {

    return (
        <Box className="h-screen w-screen grad-bg">
            <Box className="bg-white" style={{height: 100}}>
                <HeaderComponent/>
            </Box>
            <ProjectsViewComponent/>
        </Box>
    );
};

export default Home;
