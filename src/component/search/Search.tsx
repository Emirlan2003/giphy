import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getGifs } from '../../store/action-creators/action-creators';
import { getSearchUrl } from '../../store/action-creators/search';
import { getQuery } from '../../store/action-creators/urlParsers';
import Category from '../Category/Category';
import { Grid } from '../Grids/Grid';
import { LoadMoreButton } from '../LoadMore/LoadMore';
import SearchForm from '../searchForm/SearchForm';
import './Search.css'

const Search: React.FC = () => {
    const { search } = useTypedSelector(state => state.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()


    
    const searchFunc = async (value: string) => {
        dispatch(getSearchUrl(value))
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