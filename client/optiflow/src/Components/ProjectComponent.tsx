import {Card, Image, Text} from "@mantine/core";


interface ProjectComponentProps {
    name: string,
    description: string
}
const ProjectComponent = (props: ProjectComponentProps) => {
  return (
      <Card
          shadow="sm"
          component="b"
          style={{minHeight: 200}}
          className="flex flex-col justify-center items-center"
      >
          <Text weight={700} size="lg" mt="md" className="text-center">
              {props.name}
          </Text>
          <Text mt="xs" color="dimmed" size="sm" className="text-center pt-3">
              {props.description}
          </Text>
      </Card>

  )
}

export default ProjectComponent;