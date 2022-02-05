import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchRequest } from '../../store/action-creators/search';
import { getQuery } from '../../store/action-creators/urlParsers';
import { Grid } from '../Grids/Grid';
import SearchForm from '../searchForm/SearchForm';
import './Search.css'

const Search: React.FC = () => {
    const [ items, setItems ] = useState<any>(undefined)
    const navigate = useNavigate()
    const location = useLocation()

    const search = async (value: string) => {
        const { data } = await searchRequest(value)
        setItems(data)
    }

    useEffect(() => {
        const query = getQuery(location, 'q')
        if(query){
            search(query)
        }
    }, [location.search])



    const newSearch = (searchQuery: any) => {
        navigate(`/search?q=${searchQuery}`)
    }

    
    
    return (
        <>
        <div className='searchBlock'>
            <button className='search' onClick={(e) => navigate('/')}>{'<'}</button>
            <SearchForm onSubmit={newSearch}/>
        </div>
        <div>
             {
                 items ? <Grid gifs={items} /> : 'Loading'
             }
        </div>
        </>
    );
};

export default Search;