import React from 'react';
import SearchBar from './SearchBar/SearchBar';
 const Header = ({searchText, searchPhrase, addAction, editionInProgress}) => {
     return (
        <header>
            <h1>Contact list</h1>
            <SearchBar searchText={searchText} searchPhrase={searchPhrase} addAction={addAction} editionInProgress={editionInProgress}/>

        </header>
     )
 }

 export default Header;