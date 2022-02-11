import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getDetails } from '../../store/action-creators/action-creators';
import DetailsForm from '../DetailsForm/DetailsForm';
import Header from '../Header/Header';
import './Details.css'





const Details = () => {
    const [ details, setDetails ] = useState<any>(undefined)
    const match = useMatch('/gif/:id')
    const dispatch = useDispatch()


    const fetchDetails = async () => {
        const { data } = await getDetails(match?.params.id)
        setDetails(data)
    }

    useEffect(() => {
        fetchDetails()
    }, [match?.params.id])


    return (
        <div>
          <Header />
           { details ?
                      <DetailsForm details={details} />
                     :
                      <h1>Loading</h1>
           }
        </div>
    );
};

export default Details;