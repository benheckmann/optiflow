import {Box, Group, Header, Text} from "@mantine/core";

const HeaderComponent = () => {
  return (
      <Header height={100} className="align-bottom">
          <Group className="pl-5 h-full" px={20}>
              <Box>
                  <Text weight={400} className="px-5" style={{fontSize: 40, color: "#31727A"}}>
                      optiFlow
                  </Text>
              </Box>
              <Box>
                  <Text weight={700} className="px-5 pt-2" style={{fontSize: 20}}>
                      Projects
                  </Text>
              </Box>
              <Text weight={700} className="px-5 pt-2" style={{fontSize: 20}}>
                  Knowledgebase
              </Text>
          </Group>
      </Header>
  )
}

export default HeaderComponent;