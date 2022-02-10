import React, { useEffect, useState } from 'react';
const img =  require('../../assets/Vector-5.png')
const img2 = require('../../assets/inst.png')





const DetailsForm = ({ details }: any) => {


    console.log(details)

    return (
        <div className='details' key={details.id}>
            <div>
                    <img src={details.images.original.url} alt="" className='mainImg'/>
            </div>
            <div className='detailsChildBlock'>
                <h1>{details.title}</h1>
                <h3>Date of creation: {details.import_datetime}</h3>
                <h3>Super-cute cartoons & Animations that tickle your heart.</h3>
                <a href={details.url} target='blank' rel='noopener' className='a1'>
                       <button>Open on GIPHY</button>
                </a>
                
            </div>
        </div>
    );
};

export default DetailsForm;