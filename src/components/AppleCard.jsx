import React, { useState } from 'react';

import applePayCard from "../img/applePayCard.png"

export default function Cards() {

 return (
    <div>
        <div id='cardContainer' className="bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img id='card' className="relative object-cover w-full h-full rounded-xl" src={applePayCard} />
        </div>
    </div>
 );
}