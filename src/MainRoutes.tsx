import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './component/Details/Details';
import Header from './component/Header/Header';
import Gifs from './component/Home/Gifs';
import Search from './component/search/Search';

const MainRoutes = () => {


    return (
        <BrowserRouter>
               <Header />
            <Routes>
                <Route path="/" element={<Gifs />} />
                <Route path="/search" element={<Search />} />
                <Route path="/gif/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;