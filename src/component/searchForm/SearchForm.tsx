import React, { useState } from 'react';
import './Search.css'


const SearchForm = ({ onSubmit }: any) => {
    const [ value, setValue ] = useState<string>('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        if(value){
            onSubmit(value)
        }
    }

   


    return (
        <div className='fromInput'>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    onChange={(e) => setValue(e.target.value)}
                    name='search'
                    value={value}
                    title='enter search query'
                    className='inp'
                    placeholder='      ...search'
                />
                <button className='btn'>search</button>
            </form>
        </div>
    );
};

export default SearchForm;