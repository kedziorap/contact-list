import React, {Component} from 'react';
import './AddContact.css';
class AddDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: '',
            errors: []
        };
    }
    render() {
        const errors = this.state.errors.length ? 1 : null;
        return (
            <dialog className="addContact" open>
                <div className="row">
                    <input type="text" onChange={this.onChangeInputName} value={this.state.name} placeholder="Name"/>
                </div>
                <div className="row">
                    <input type="text" onChange={this.onChangeInputPhone} placeholder="Phone"/>
                </div>
                <div className="row">
                    <div className="errors">
                        {errors && (this.state.errors).map(err => <span className="error" key={err}>{err}</span>)}
                    </div>
                    <div className="nav">
                        <button onClick={this.addUser} className="confirm">Ok</button><button className="cancel" onClick={this.props.show} value={this.state.number}>Cancel</button>
                    </div>
                </div>
            </dialog>
        )
    }
    onChangeInputName = e => {
        this.setState({
            name: e.target.value
        });
    }
    onChangeInputPhone = e => {
        this.setState({
            number: e.target.value
        });
    }
    addUser = () => {
        const {name, number} = this.state;
        const result = this.props.addAction(name, number);
        if (result === 1) {
            this.props.show();
        } else {
            this.setState({
                errors: [...result]
            })
        }
    }
}
export default AddDialog;