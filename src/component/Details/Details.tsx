import { addLocal, checkProductInCart } from '../../store/action-creators/favoritesFunction.tsx/FavoritesFunction';
import { getDetails } from '../../store/action-creators/action-creators/action-creators';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAuth } from '../../authContext/AuthContext';
import DetailsForm from '../DetailsForm/DetailsForm';
import React, { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import Header from '../Header/Header';
import './Details.css'



const Details = () => {
    const [ details, setDetails ] = useState<any>(undefined)
    const match = useMatch('/gif/:id')

    const {
        handleLogout,
        user: { email },
      } = useAuth();


    const fetchDetails = async () => {
        const { data } = await getDetails(match?.params.id)
        setDetails(data)
    }

    useEffect(() => {
        fetchDetails()
    }, [match?.params.id])


    useEffect(() => {
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', '[]')
        }
    }, [])

    

    

    return (
        <div>
          <Header />
           { details ?
                    <>
                      <DetailsForm details={details} />
                      {
                          email ? 
                                    <FavoriteIcon 
                                        onClick={() => addLocal(details)} 
                                        className=
                                                  {checkProductInCart(match?.params.id) 
                                                     ? 'secondary' 
                                                     : 'primary'
                                                  }
                                       />
                                :
                            null
                      }
                    </>
                     :
                      <h1>Loading</h1>
           }
        </div>
    );
};

export default Details;