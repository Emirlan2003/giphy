import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gifs from './component/Home/Gifs';
import Search from './component/search/Search';
import SearchForm from './component/searchForm/SearchForm';

const MainRoutes = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gifs />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;