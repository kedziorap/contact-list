import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import './Header.css';
 const Header = ({searchText, searchPhrase, addAction, editionInProgress}) => {
     return (
        <header className="header">
            <div className="header-wrap">
            <h1 className="title">Contact list</h1>
            <SearchBar searchText={searchText} searchPhrase={searchPhrase} addAction={addAction} editionInProgress={editionInProgress} /></div>
        </header>
     )
 }

 export default Header;