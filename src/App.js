import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContactList from './components/ContactsList/ContactsList';
const users = [
  {
    name: 'Piotr',
    phone: '789123456'
  },
  {
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
      <Header searchText={this.state.text} searchPhrase={this.getSearchingText} addAction={this.addNewContact}/>
        <ContactList users={this.state.filteredUsers} onDelete={this.deleteContact} onEdit={this.editContact}/>
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
    this.setState(
      {
        filteredUsers: this.getFiltredUsers(text)
      }
    )
  }
  getFiltredUsers(text){
    const users = this.state.users;
    return users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()) || user.phone.toString().includes(text))
  }
  addNewContact = (name, phone) =>{
    const text = this.state.text;
    if(name.includes(text) || phone.includes(text)) {
      this.setState({
        users: [...this.state.users, {name, phone}],
        filteredUsers: [...this.state.users, {name, phone}]
      }, this.filterUsers);
    } else {
      this.setState({
        users: [...this.state.users, {name, phone}]
      });
    }
  }
  deleteContact = phone => {
    const users = this.state.users;
    const updateUser = users.filter(user => user.phone !== phone);
    this.setState({
      users: updateUser,
      filteredUsers: updateUser
    })
  }
  editContact = (name, phone, oldPhone) => {
    const allUsers = this.state.users;
      const users = allUsers.map(user =>{
        if(user.phone === oldPhone) {
          user.name = name;
          user.phone = phone;
        }
        return user; 
      });
      this.setState({
        users,
        filteredUsers: users
      })
  }
}

export default App;
