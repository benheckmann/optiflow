import {Container, LoadingOverlay} from "@mantine/core";

const LoadingScreen = () => (
    <Container className="text-white" style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }}>
        <LoadingOverlay visible={true}/>
    </Container>
);

export default LoadingScreen;