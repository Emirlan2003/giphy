import { Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../authContext/AuthContext';
import GiphyIcons from '../GiphyIcons/GiphyIcons';
import SearchForm from '../searchForm/SearchForm';
import './Header.css'

const Header = () => {
    const navigate = useNavigate()

    const {
        handleLogout,
        user: { email },
      } = useAuth();



    const search = (searchQuery: any) => {
        navigate(`/search?q=${searchQuery}`)
    }

    const navFavorite = () => {
      navigate('/favorite')
    }

    return (
        <div className='header'>
            <GiphyIcons />
                {
                  email ?
                          <div onClick={navFavorite} className='favorite'>
                              FAVORITES
                          </div>
                        : 
                   null
                }
            <SearchForm onSubmit={search}/>
            <div className='btnLogin'>
                 {email ? (
                             <Link to="/auth">
                                 <Button
                                     className="btn_logout"
                                     variant="contained"
                                     disableElevation
                                     onClick={handleLogout}
                                     >
                                 Logout
                                </Button>
                             </Link>
                           ) : null}
     
                {email ? null : (
                   <Link to="/auth">
                     <Button 
                           className="btn_login" 
                           variant="contained" 
                           disableElevation>
                       Login
                     </Button>
                   </Link>
                 )}
            </div>
        </div>
    );
};

export default Header;