import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getGifs } from '../../store/action-creators/action-creators';
import { Grid } from '../Grids/Grid';
import { LoadMoreButton } from '../LoadMore/LoadMore';
import SearchForm from '../searchForm/SearchForm';

const Gifs: React.FC = () => {
    const [ offset, setOffset ] = useState(0)
    const limit = 50
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { gifs } = useTypedSelector(state => state.data)

    const fetchTrending = async () => {
        const {gifs}: any = await getGifs(limit, offset)
        dispatch( gifs ? [...gifs] : gifs)
    }

    useEffect(() => {
        dispatch(getGifs())
    }, [])


    useEffect(() => {
        fetchTrending()
    }, [offset])
   

    const search = (searchQuery: any) => {
        navigate(`/search?q=${searchQuery}`)
    }

    const loadmore = () => {
        setOffset(limit + offset)
    }


    
    
    
    return (
        <div>
        <SearchForm onSubmit={search}/>
        <div>
            {
                gifs ? 
                <Grid gifs={gifs}/>
                :
                <h1>error</h1>
            }
        </div>
        <LoadMoreButton onClick={loadmore}/>
        </div>
    );
};

export default Gifs;