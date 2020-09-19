import React, {useRef} from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

const Sender = () => {
    const text = useRef('');
    const sendMessage = () => {
        console.log("text", text.current.value)
        socket.emit("sendMessage", text.current.value)
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Your message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={text}></textarea>

            </div>
            <button type="button" className=" btn btn-primary float-right" onClick={sendMessage}>Send</button>
        </>
    )
}

export default Sender;