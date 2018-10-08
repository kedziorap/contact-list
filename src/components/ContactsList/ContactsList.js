import React from 'react';
import Contact from './Contact/Contact';
import './ContactList.css';

const ContactList = ({users, onDelete, onEdit, editionInProgress, canEdit}) => {
    if (users) {
        const usersList = users.map((user)=>{
            return <Contact name={user.name} key={user.phone} phone={user.phone} onDelete={onDelete} onEdit={onEdit} editionInProgress={editionInProgress} canEdit={canEdit}/>
        });
        return(
            <main>
                {usersList}
            </main>
        )
    } else {
        return(
            <main>
                <p>Contact List is empty</p>
            </main>
        )
    }
}

export default ContactList;