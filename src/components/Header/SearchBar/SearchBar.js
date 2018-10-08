import React, {Component} from 'react';
import AddContact from './AddContact/AddContact';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <div className="searchbox">
                <div> <button className="button"onClick={this.showAddDialog} disabled={this.props.editionInProgress}><FontAwesomeIcon icon="user-plus"/></button>
                </div>
                <div>
                <label className="icon" htmlFor="search"><FontAwesomeIcon icon="search"/> </label><input className="searchbar" id="search" type="text" value={this.state.searchText} onChange={this.onChangeInput} disabled={this.props.editionInProgress} placeholder="Search contact"/>
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
            isAddIng: !this.state.isAddIng
        })
    }
    onChangeInput = (e) => {
        this.setState({
            searchText: e.target.value
        }, this.props.searchPhrase(e.target.value))
    }
}

 export default SearchBar;