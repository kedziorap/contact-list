import React from 'react';

const Contact = ({name, phone}) => {
    return (
        <div>
            <p>
                <span>{name}</span><br/>
                <span>{phone}</span>
            </p>
            <button>Edytuj</button><button>Usuń</button>
        </div>
    )
}

export default Contact;