import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getGifs } from '../../store/action-creators/action-creators/action-creators';
import Category from '../Category/Category';
import { Grid } from '../Grids/Grid';
import Header from '../Header/Header';
import { LoadMoreButton } from '../LoadMore/LoadMore';
import './Gifs.css'



const Gifs: React.FC = () => {
    const [ offset, setOffset ] = useState<number>(0)
    const [ items, setItems ] = useState<any>() 
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    const { gifs } = useTypedSelector(state => state.gifsReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const limit = 30


    
    const fetchTrending = () => {
        dispatch(getGifs(limit, offset))
        setItems(items ? [...items, ...gifs] : gifs)
    }

    // console.log(gifs)
    

    const loadmore = () => {
        setOffset(limit + offset)
        setIsLoading(true)
    }

    useEffect(() => {
        fetchTrending()
    }, [offset])


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
                    {
                        isLoading ? 
                                  <Grid gifs={items} /> 
                                  : 
                                  <Grid gifs={gifs}/> 
                    }
                 </div>
             </div>
            <LoadMoreButton onClick={loadmore}/>
        </div>
    );
};

export default Gifs;