import React, {useState, useEffect, useRef} from 'react';
import uuid from 'react-uuid';
import io from 'socket.io-client';


const Jumbotron = () => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const socket = io('http://localhost:3000');

        socket.on('newMessage', (message) => {
            console.log("New message:", message)
            setMessages([...messages, message]);

            socket.close();
        });

    }, [messages])

    return (
        <div className="jumbotron">
            {messages.map((message => <p key={uuid()}>{message}</p>))}
        </div>
    )
}

export default Jumbotron;