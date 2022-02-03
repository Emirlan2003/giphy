import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getGifs } from '../../store/action-creators/action-creators';
import { Grid } from '../Grids/Grid';

const Gifs: React.FC = () => {
    const dispatch = useDispatch()
    const { gifs } = useTypedSelector(state => state.data)

    useEffect(() => {
        dispatch(getGifs())
    }, [])
    
    
    return (
        <div>
            {
                gifs ? 
                <Grid gifs={gifs}/>
                :
                <h1>error</h1>
            }
        </div>
    );
};

export default Gifs;