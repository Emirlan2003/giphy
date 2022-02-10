import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GiphyIcons.css'
const giphy = require('../../assets/giphy.png')

const GiphyIcons = () => {
    const navigate = useNavigate()



    return (
        <div onClick={(e) => navigate('/')}>
            <img src={giphy} alt="" className='giphy'/>
        </div>
    );
};

export default GiphyIcons;