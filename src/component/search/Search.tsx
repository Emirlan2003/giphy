import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getSearcUrl } from '../../store/action-creators/action-creators/action-creators';
import { getQuery } from '../../store/action-creators/searchFunction/urlParsers';
import Category from '../Category/Category';
import { Grid } from '../Grids/Grid';
import Header from '../Header/Header';
import { LoadMoreButton } from '../LoadMore/LoadMore';
import './Search.css'

const Search: React.FC = () => {
    const { search } = useTypedSelector(state => state.gifsReducer)
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const [ offset, setOffset ] = useState<number>(50)
    const [ items, setItems ] = useState<any>() 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const limit = 50


    
    const fetchTrending = () => {
        dispatch(getSearcUrl(limit, offset))
        setItems(items ? [...search, ...items] : search)
    }
    

    const loadmore = () => {
        setOffset(limit + offset)
        setIsLoading(true)
    }

    useEffect(() => {
        fetchTrending()
    }, [offset])



    
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
        setIsLoading(false)
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
                         isLoading ? 
                                    <Grid gifs={items}/> 
                                   : 
                                    <Grid gifs={search} />
                      }
                 </div>
             </div>
            <LoadMoreButton onClick={loadmore}/>
        </>
    );
};

export default Search;