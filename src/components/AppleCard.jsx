import React, { useState } from 'react';

// import applePayCard from "../img/applePayCard.png"
import applePayCard from "../img/empowerCard.png"

export default function Cards() {

 return (
    <div className='flex justify-center items-center px-8'>
       <img id='card' className="object-cover w-full h-full rounded-xl" src={applePayCard} />
    </div>
 );
}