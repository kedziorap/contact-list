import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            name: props.name,
            phone: props.phone,
            errors: []
        };
    }
    render(){
        const errors = this.state.errors.length ? 1 : null;
        if(this.state.isEditing) {
            return(
                <div className="contact">
                    <div className="contactInfo">
                        <div className="iconUser">
                            <FontAwesomeIcon icon="user-alt" />
                        </div>
                        <div className="contactDeatils">
                            <div>
                                <input type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Name"/>   <br/>
                                <input type="text" value={this.state.phone} onChange={this.onChangePhone} placeholder="Phone number"/> <br/>
                                {errors && (this.state.errors).map(err => <span className="error" key={err}>{err}<br/></span>)}
                            </div>
                        </div>
                    </div>
                    <div className="btns-nav">
                        <div>
                        <button onClick={this.editInputs}>Ok</button><button onClick={this.cancelEditing}>Cancel</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="contact">
                    <div className="contactInfo">
                        <div className="iconUser">
                            <FontAwesomeIcon icon="user-alt" />
                        </div>
                        <div className="contactDeatils">
                            <div>
                                <span className="name">{this.props.name}</span><br/>
                                <span className="phone">{this.props.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className="btns-nav">
                        <div>
                            <button className="edit" onClick={this.toggleEdit} disabled={this.props.canEdit}>Edit</button><button className="delete" onClick={()=>this.props.onDelete(this.props.phone)}disabled={this.props.canEdit}>Delete</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
    cancelEditing = () => {
        this.setState({
            name: this.props.name,
            phone: this.props.phone
        }, this.toggleEdit())
    }
    editInputs = () => {
        const {name, phone} = this.state;
        const oldPhone = this.props.phone;
        const oldName = this.props.name;
        const result = this.props.onEdit(name, phone, oldPhone, oldName);
        console.log(result);
        if (result === 1) {
            this.toggleEdit();
        } else {
            this.setState({
                errors: [...result]
            })
        }
    }
    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing,
            errors: []
        }, this.props.editionInProgress());
    }
    onChangeName = e =>{
        const name = e.target.value;
        this.setState({name})
    }
    onChangePhone = e => {
        const phone = e.target.value;
        this.setState({phone})
    }
}

export default Contact;