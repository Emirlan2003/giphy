import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getDetails } from '../../store/action-creators/action-creators';
import './Details.css'
const img =  require('../../assets/Vector-5.png')
const img2 = require('../../assets/inst.png')




const Details: React.FC = () => {
    const { details } = useTypedSelector(state => state.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const match = useMatch('/gif/:id')

 

    useEffect(() => {
        dispatch(getDetails(match?.params.id))
    }, [])


    return (
        <div>
           <button className='backButton' onClick={(e) => navigate('/')}>{'<'}</button>

           { details ?
            <>
                <div className='details' key={details.id}>
                    <div>
                        <img src={details.images.original.url} alt="" className='mainImg'/>
                    </div>
                    <div className='detailsChildBlock'>
                        <h1>{details.title}</h1>
                        <h3>{details.user.description}</h3>
                        <a href={details.url} target='blank' rel='noopener' className='a1'>
                               <button>Open on GIPHY</button>
                        </a>
                        <div className='contentBlock'></div>
                        <a href={details.user.website_url || ''} target='blank' rel='noopener' className='a2'>
                               <img src={img} alt='' />
                        </a>
                        <a href={details.user.instagram_url} target='blank' rel='noopener' className='a3'>
                               <img src={img2} alt='' />
                        </a>
                    </div>
                </div>
            </>
           :
           <h1>Loading</h1>
        }



        </div>
    );
};

export default Details;