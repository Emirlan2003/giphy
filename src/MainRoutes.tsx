import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthContextProvider from './authContext/AuthContext';
import Auth from './component/Auth/Auth';
import Details from './component/Details/Details';
import Gifs from './component/Home/Gifs';
import Search from './component/search/Search';

const MainRoutes = () => {


    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Gifs />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/gif/:id" element={<Details />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default MainRoutes;