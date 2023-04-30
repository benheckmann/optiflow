import {Box, Button, Space, Text, Textarea, TextInput} from "@mantine/core";
import React, {useEffect, useState} from "react";
import {UserSession} from "../models/UserSession";

interface QuestionComponentProps {
    userSession: UserSession,
    setUserSession: React.Dispatch<React.SetStateAction<UserSession>>;
    question: number;
}

const QuestionComponent = (props: QuestionComponentProps) => {
    const [answer, setAnswer] = useState(props.userSession.questions[props.question].answer);

    useEffect(() => {
        setAnswer(props.userSession.questions[props.question].answer);
    }, [props.question]);

    return (
        props.question < props.userSession.questions.length ?
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
                        defaultValue={props.userSession.questions[props.question].answer}
                        onChange={(e) => {
                            setAnswer(e.target.value);
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
                        value={answer}
                    />
                    <Space h={30}/>
                </Box>
            </Box> : <></>

    )
}

export default QuestionComponent;