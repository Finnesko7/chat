import React from 'react';

const LiUser = ({user, callback}) =>
    <li
        className={`list-group-item ${user.active ? 'active' : ''}`}
        onClick={() => {
            callback(user.id)
        }}
    >
        {user.name}
    </li>

export default LiUser;