import React from 'react'
import './closeFriend.css'



function closeFriend(user) {
    return (
        <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={user.profilepicture} alt="sidebarImg" />
            <span className='sidebarFriendName'>{user.username} </span>
        </li>
    )
}

export default closeFriend