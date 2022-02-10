import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getCategory } from '../../store/action-creators/action-creators';
import CategoryForm from '../CategoryForm/CategoryForm';


const Category = ({ onSubmit }: any) => {
    const { category } = useTypedSelector(state => state.data)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getCategory())
    }, [])



    const clickHandler = (e: any, name: string) => {
        if(category){
            category.map((item) => {
                item.subcategories.map((sub: any) => {
                     if(name === sub.name){
                         onSubmit(name)
                     }
                })
            })
        }
    } 



    return (
        <>
            {
                category ?
                    
                    category.map((item) => (
                         <CategoryForm item={item} clickHandler={clickHandler} key={item.gif.id}/>
                    ))
    
                :
    
                <h1>Loading...</h1>
            }
        </>
    );
};

export default Category;