import React from 'react';
import SearchBar from './SearchBar/SearchBar';
 const Header = ({searchText, searchPhrase}) => {
     return (
        <header>
            <h1>Contact list</h1>
            <SearchBar searchText={searchText} searchPhrase={searchPhrase}/>

        </header>
     )
 }

 export default Header;