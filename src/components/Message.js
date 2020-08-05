//es7 --- 'rfce' short key
import React from 'react'
import { CardContent, Typography, Card } from '@material-ui/core';
import './Message.css'

function Message({ userName, message }) {
    const isUser = userName === message.userName;
    return (
        <div className={`message ${isUser && 'message-user'}`}>
            <Card className={isUser ? "message-user-card" : "message-guest-card"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {message.userName} : {message.text}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message

