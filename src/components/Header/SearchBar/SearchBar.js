import React, {Component} from 'react';
import AddContact from './AddContact/AddContact';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: props.searchText,
            isAddIng: false
        };
    } 
    render() {
        return(
            <div>
                <div>
                    Add contact: <button onClick={this.showAddDialog}>+</button>
                </div>
                <div>
                    Search contact: <input type="text" value={this.state.searchText} onChange={this.onChangeInput}/>
                </div>
                {this.state.isAddIng && <AddContact show={this.hideAddig} addAction={this.props.addAction}/>}
            </div>
        );
    }
    hideAddig = () => {
        this.setState({
            isAddIng: false
        })
    }
    showAddDialog = () => {
        this.setState({
            isAddIng: true
        })
    }
    onChangeInput = (e) => {
        this.setState({
            searchText: e.target.value
        }, this.props.searchPhrase(e.target.value))
    }
}

 export default SearchBar;