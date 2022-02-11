import React from 'react';
import { useNavigate } from 'react-router-dom';
import GiphyIcons from '../GiphyIcons/GiphyIcons';
import SearchForm from '../searchForm/SearchForm';
import './Header.css'

const Header = () => {
    const navigate = useNavigate()

    const search = (searchQuery: any) => {
        navigate(`/search?q=${searchQuery}`)
    }

    return (
        <div className='header'>
            <GiphyIcons />
            <SearchForm onSubmit={search}/>
        </div>
    );
};

export default Header;