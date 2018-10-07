import React from 'react';
import SearchBar from './SearchBar/SearchBar';
 const Header = ({searchText, searchPhrase, addAction}) => {
     return (
        <header>
            <h1>Contact list</h1>
            <SearchBar searchText={searchText} searchPhrase={searchPhrase} addAction={addAction}/>

        </header>
     )
 }

 export default Header;