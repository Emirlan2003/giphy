import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gifs from './component/Home/Gifs';

const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gifs />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;