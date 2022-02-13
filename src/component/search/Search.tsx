import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getSearcUrl } from '../../store/action-creators/action-creators';
import { getQuery } from '../../store/action-creators/urlParsers';
import Category from '../Category/Category';
import { Grid } from '../Grids/Grid';
import Header from '../Header/Header';
import './Search.css'

const Search: React.FC = () => {
    const { search } = useTypedSelector(state => state.gifsReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()


    
    const searchFunc = async (value: string) => {
        dispatch(getSearcUrl(value))
    }



    useEffect(() => {
        const query = getQuery(location, 'q')
        if(query){
            searchFunc(query)
        }
    }, [location.search])



    const newSearch = (searchQuery: any) => {
        navigate(`/search?q=${searchQuery}`)
    }

    
    return (
        <>
          <Header />
            <div className='mainBlock'>
                 <div className='childBlock1'>
                     <Category onSubmit={newSearch}/>
                 </div>
                 <div className='childBlock2'>
                      {
                         search ? <Grid gifs={search} /> : 'Loading'
                      }
                 </div>
             </div>
        </>
    );
};

export default Search;