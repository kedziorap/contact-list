import React, {Component} from 'react';

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
            <dialog open>
                Name: <input type="text" onChange={this.onChangeInputName} value={this.state.name}/><br/>
                Phone number: <input type="text" onChange={this.onChangeInputPhone}/><br/>
                <button onClick={this.addUser}>Ok</button><button onClick={this.props.show} value={this.state.number}>Cancel</button>
                {errors && (this.state.errors).map(err => <p className="error" key={err}>{err}</p>)}
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