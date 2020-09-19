import React, {useEffect, useState} from 'react';
import LiUser from "./LiUser";
import Jumbotron from "./Jumbotron";
import Sender from "./Sender";
const users = [
    {
        id: 1,
        name: "Finnesko",
        active: true
    },
    {
        id: 2,
        name: "Qvini",
        active: false
    },
    {
        id: 3,
        name: "Nordix",
        active: false
    }
];

const ChatBox = () => {
    const [activeId, setActiveId] = useState(0);
    const setUserActive = (id) => {
        setActiveId(id);
        users.forEach(user => {
            if (user.id === id) {
                user.active = true

            } else {
                user.active = false
            }
        });
    }

    useEffect(() => {
    }, [activeId])

    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-4">
                    <ul className="list-group list-users">
                        {users.map(user => <LiUser key={user.id} user={user} callback={setUserActive} />)}
                    </ul>
                </div>
                <div className="col-8">
                    <Jumbotron/>

                    <Sender/>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;