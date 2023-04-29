import {Card, Image, Modal, Text, useMantineTheme} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import SummaryPageComponent from "./SummaryPageComponent";
import {UserSession} from "../models/UserSession";


interface ProjectComponentProps {
    userSession: UserSession
}
const ProjectComponent = (props: ProjectComponentProps) => {
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();
  return (
      <>
          <Modal
              opened={opened}
              size={"xl"}
              onClose={close}
              overlayProps={{
                  color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[9],
                  opacity: 0.55,
                  blur: 3,
              }}>
              <SummaryPageComponent userSession={props.userSession}/>
          </Modal>
          <Card
              onClick={open}
              shadow="sm"
              component="b"
              style={{minHeight: 200}}
              className="flex flex-col justify-center items-center"
          >
              <Text weight={700} size="lg" mt="md" className="text-center">
                  {props.userSession.projectName}
              </Text>
              <Text mt="xs" color="dimmed" size="sm" className="text-center pt-3">
                  {props.userSession.description}
              </Text>
          </Card>
      </>





  )
}

export default ProjectComponent;