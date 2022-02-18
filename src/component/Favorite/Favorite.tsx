import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getFavorites } from '../../store/action-creators/action-creators/action-creators';
import { AppDispatch } from '../../store/reducers';
import Category from '../Category/Category';
import { Grid } from '../Grids/Grid';
import Header from '../Header/Header';
import './Favorite.css'

const Favorite = () => {
    const { favorites } = useTypedSelector(state => state.gifsReducer)
    const dispatch = useDispatch<AppDispatch>()
    const navigate =  useNavigate()


    useEffect(() => {
        dispatch(getFavorites())
    }, [])


    const search = (searchQuery: any) => {
        navigate(`/search?q=${searchQuery}`)
    }



    return (
            <div>
                <Header />
                  <div className='mainBlock'>
                      <div className='childBlock1'>
                          <Category onSubmit={search}/>
                      </div>
                      <div className='childBlock2'>
                          <div className='favMainBlock'>
                              {
                                favorites ?
                                        <Grid gifs={favorites}/>
                                          : 
                                        null
                              }
                          </div>
                      </div>
                  </div>
             </div>
    );
};

export default Favorite;