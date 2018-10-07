import React, {Component} from 'react';

class AddDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: ''
        };
    }
    render() {
        return (
            <dialog open>
                Name: <input type="text" onChange={this.onChangeInputName} value={this.state.name}/><br/>
                Phone number: <input type="text" onChange={this.onChangeInputPhone}/><br/>
                <button onClick={this.addUser}>Ok</button><button onClick={this.props.show} value={this.state.number}>Cancel</button>
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
        const name = this.state.name;
        const phone = this.state.number;
        this.props.addAction(name, phone);
        this.props.show();
    }
}
export default AddDialog;