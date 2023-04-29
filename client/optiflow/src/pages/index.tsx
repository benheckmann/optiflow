import type { NextPage } from "next";
import {Box, Text, Button, Container, Navbar, Title, ActionIcon, Group, Header} from '@mantine/core';
import {rgba} from "@mantine/styles/lib/theme/functions/fns/rgba/rgba";
import HeaderComponent from "../Components/HeaderComponent";
import ProjectsViewComponent from "../Components/ProjectsViewComponent";
const Home: NextPage = () => {
  const handleClick = () => {
    console.log("Hello!");
  };

  // @ts-ignore
    return (
        <Box className="h-screen w-screen grad-bg">
            <Box className="bg-white" style={{height: 100}}>
                <HeaderComponent></HeaderComponent>
            </Box>
            <ProjectsViewComponent></ProjectsViewComponent>
        </Box>



    );
};

export default Home;
