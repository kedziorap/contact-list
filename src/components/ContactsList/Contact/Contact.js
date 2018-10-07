import React, {Component} from 'react';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            name: props.name,
            phone: props.phone
        };
    }
    render(){
        if(this.state.isEditing) {
            return(
                <div>
                    <p>
                        <input type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Name"/>   <br/>
                        <input type="text" value={this.state.phone} onChange={this.onChangePhone} placeholder="Phone number"/>
                    </p>
                    <button onClick={this.editInputs}>Ok</button><button onClick={this.cancelEditing}>Cancel</button>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        <span>{this.props.name}</span><br/>
                        <span>{this.props.phone}</span>
                    </p>
                    <button onClick={this.toggleEdit} disabled={this.props.canEdit}>Edit</button><button onClick={()=>this.props.onDelete(this.props.phone)}disabled={this.props.canEdit}>Delete</button>
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
        this.props.onEdit(name, phone, oldPhone);
        this.toggleEdit();
    }
    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
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