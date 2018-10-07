import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContactList from './components/ContactsList/ContactsList';
const users = [
  {
    id: 1,
    name: 'Piotr',
    phone: '789123456'
  },
  {
    id: 2,
    name: 'Paweł',
    phone: '123654879'
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: users,
      filteredUsers: users,
      text: ''
    };
  }
  render() {
    return (
      <div className="App">
      <Header searchText={this.state.text} searchPhrase={this.getSearchingText}/>
        <ContactList users={this.state.filteredUsers} />
        <p>Control text: {this.state.text}</p>
      </div>
    );
  }
  getSearchingText = (text) =>{
    this.setState({
      text
    }, this.filterUsers);
  }
  filterUsers() {
    const text = this.state.text;
    const users = this.state.users;
    this.setState(
      {
        filteredUsers: users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()) || user.phone.toString().includes(text))
      }
    )
  }
}

export default App;
