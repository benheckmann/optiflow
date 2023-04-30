import {Box, Button, Space, Text, Textarea, TextInput} from "@mantine/core";
import React, {useState} from "react";
import {UserSession} from "../models/UserSession";

interface QuestionComponentProps {
    userSession: UserSession,
    setUserSession: React.Dispatch<React.SetStateAction<UserSession>>;
    question: number;
}

const QuestionComponent = (props: QuestionComponentProps) => {
    const [answer, setAnswer] = useState("");


    return (
        props.question > props.userSession.questions.length ?
        <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            textAlign: "center" // added property
        }}>
            <Box style={{minWidth: 200, width: 300, textAlign: "start"}}>
                <Text weight={500}>
                    {props.userSession.questions[props.question].question}
                </Text>
                <Space h={10}/>
                <Textarea
                    placeholder="Answer..."
                    autosize
                    minRows={1}
                    onChange={(e) => {
                        setAnswer(e.target.value)
                        props.setUserSession((userSession: UserSession) => {
                            return {
                                ...userSession,
                                questions: userSession.questions.map((q, index) => index === props.question ? {
                                    question: q.question,
                                    answer: e.target.value
                                } : q)
                            } as UserSession;
                        })
                    }}
                    style={{width: "100%"}}
                />
                <Space h={30}/>
            </Box>
            <Button className="pt-10" style={{background: "#25453F"}} onClick={() => props.setUserSession({
                ...props.userSession,
                questions: Object.assign([], props.userSession.questions, {[props.question]: answer})
            })}>
                Submit
            </Button>
        </Box> : <></>

    )
}

export default QuestionComponent;