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
      filteredUsers: null,
      text: '',
      edition: false
    };
  }
  render() {
    return (
      <div className="App">
      <Header searchText={this.state.text} searchPhrase={this.getSearchingText} addAction={this.addNewContact} editionInProgress={this.state.edition}/>
        <ContactList users={this.state.filteredUsers} onDelete={this.deleteContact} onEdit={this.editContact} editionInProgress={this.editionInProgress} canEdit={this.state.edition}/>
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
    console.log(name, phone)
    const checkPhone = this.checkPhone(phone);
    const checkName = this.checkName(name);
    if (checkName === 1 && checkPhone === 1) {
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
      return 1
    }
    return [checkPhone, checkName];
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
      });
  }
  editionInProgress = () => {
    this.setState({
      edition: !this.state.edition
    })
  }
  checkName = name => {
    name = name.trim();
    const reg = new RegExp('[A-z0-9 -]');
    if (reg.test(name) && name.length > 2) {
      return 1
    } else if (name.length <= 2){
      return 'Name is too short. You need minimum 3 characters!'
    }
    return 'In input \'name\' use characters between A and z, digit or \'=\'!';
  }

  checkPhone = phone => {
    const reg = new RegExp('[0-9]');
    phone=phone.trim();
    if (reg.test(phone) && phone.length > 5) {
      return 1
    } else if (phone.length <=5 ) {
      return 'Phone number is too short. You need minimum 6 digits!'
    }
    return 'Characters in \'phone\' input must be digit!';
  }
  componentDidMount() {
    if (this.state.users.length > 0) {
      this.setState({
        filteredUsers: this.state.users
      });
    }
  }
}

export default App;
