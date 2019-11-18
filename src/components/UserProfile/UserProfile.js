import React from 'react';
import './UserProfile.css';

function UserProfile(props) {
    return (
        <section>
            <h2>{props.user.username}</h2>
            <h3>{props.user.first_name} {props.user.last_name}</h3>
            <span className='btn'>Edit Profile</span>
        </section>
    );
}

export default UserProfile;