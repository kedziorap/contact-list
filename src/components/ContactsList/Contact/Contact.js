import React, {Component} from 'react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        }
    }
    render(){
        return (
            <div>
                <p>
                    <span>{this.props.name}</span><br/>
                    <span>{this.props.phone}</span>
                </p>
                <button>Edytuj</button><button onClick={this.deleteUser}>Usuń</button>
            </div>
        );
    }
    deleteUser = () => {
        const phone = this.props.phone;
        this.props.onDelete(phone);
    }
}

export default Contact;