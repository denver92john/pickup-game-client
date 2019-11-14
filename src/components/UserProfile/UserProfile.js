import React from 'react';
import './UserProfile.css';

function UserProfile(props) {
    return (
        <section>
            <h2>{props.user.username}</h2>
            <h3>{props.user.first_name} {props.user.last_name}</h3>
            <a className='btn' href='#'>Edit Profile</a>
        </section>
    );
}

export default UserProfile;