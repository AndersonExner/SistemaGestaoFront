import React from "react"
import  Button  from "react-bootstrap/Button";
import  Card  from "react-bootstrap/Card";
import  Stack  from "react-bootstrap/Stack";

export const Home = () => {
    return (
        <div className="main">
            <Card>
                <Card.Header>
                    <Stack direction="horizontal">
                        <h4>Home</h4>
                    </Stack>
                </Card.Header>
            </Card>
        </div>
    )
}