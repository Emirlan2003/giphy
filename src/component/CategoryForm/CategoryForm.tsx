import React, { useState } from 'react';
import './CategoryForm.css'
const drots1 = require('../../assets/Vector.png')
const drots2 = require('../../assets/Vector2.png')




const CategoryForm = ({ item, clickHandler }: any) => {
    const [ sub, setSub ] = useState<boolean>(false)

    const subToggle = () => {
        if(!sub){
            setSub(true)
        }else if(sub){
            setSub(false)
        }
    }

    const mainFunc = (e: any, name: string) => {
         clickHandler(e, name)
         setSub(false)
    }



    return (
            <div>
                <div key={item.gif.id} className='categoryMainBlock'>
                    <div className='categoryBlockText' onClick={subToggle}>
                        <div className='categoryText'>{item.name.toUpperCase()}</div>
                        <div className='drotsBlock'>
                            <div className='lengthBlock'>
                                 <span className='subLength'>{item.subcategories.length}</span>
                            </div>
                            {
                                sub ?
                                   <img src={drots1} alt="" className='drots'/>
                                   :
                                   <img src={drots2} alt="" className='drots'/>
                            }
                        </div>
                    </div>
                    <div className='subCategory'>
                        { sub ?
                            item.subcategories.map((sub: any) => (
                                <div onClick={(e) => mainFunc(e, sub.name)} className='subCategoryName'>{sub.name.toUpperCase()}</div>
                            ))
                              :
                          null
                        }
                    </div>
                </div>
            </div>
    );
};

export default CategoryForm;