import React from 'react';
import Contact from './Contact/Contact';

const ContactList = ({users, onDelete}) => {
    if (users.length > 0) {
        const usersList = users.map((user)=>{
            return <Contact name={user.name} key={user.phone} phone={user.phone} onDelete={onDelete}/>
        });
        return(
            <main>
                {usersList}
            </main>
        )
    } else {
        return(
            <main>
                <p>No result</p>
            </main>
        )
    }
}

export default ContactList;