import React, { useState } from 'react';

import visaLogo from "../img/visa-logo.png"
import standardCharterLogo from "../img/stanchart-logo.png"

export default function Cards() {

 return (
    <div id="cardContainer" className="rounded-xl relative text-white shadow-2xl">
        <img id='card' className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />
        <div className="w-full px-8 absolute top-6">
            <div className="flex flex-col justify-between">
                <div className="flex justify-between">
                <div className="">
                    <p className="font-bold text-xs">
                        Corporate Benefits Card
                    </p>
                </div>
                <img className="w-28 transform -translate-y-7 translate-x-5" src={standardCharterLogo} />
                </div>
                <div className="">
                <p className="font-light text-xs">
                    Balance
                </p>
                <p className="font-medium text-lg">
                    RM 654.09
                </p>
                <br></br>
                <div className="flex justify-between">
                    <p className="tracking-more-wider">
                        ****  ****  ****  7632
                    </p>
                    <img className="w-16" src={visaLogo} />
                </div>
            </div> 
            </div>
            
        </div>
    </div>
 );
}