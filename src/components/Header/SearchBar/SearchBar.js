import React, {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ''
        }
    } 
    render() {
        return(
            <div>
                <div>
                    Add contact: <button>+</button>
                </div>
                <div>
                    Search contact: <input type="text" value={this.state.searchText} onChange={this.onChangeInput}/>
                </div>
            </div>
        );
    }
    onChangeInput = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }
}

 export default SearchBar;