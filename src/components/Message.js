//es7 --- 'rfce' short key
import React, { forwardRef } from 'react'

import { CardContent, Typography, Card } from '@material-ui/core';
import './Message.css'

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    return (
        <div ref={ref} className={`message ${isUser && 'message-user'}`}>
            <Card className={isUser ? "message-user-card" : "message-guest-card"}>
                <CardContent>
                    <Typography
                        color="white"
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username}: `} {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message

