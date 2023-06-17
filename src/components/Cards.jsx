import React, { useState } from 'react';
import "../css/tailwindImport.css"
import standardCharterLogo from "../img/standardCharterLogo.png"

export default function Cards() {

 return (
    <div style={{marginBottom: "25px"}}>
        <div className="w-45 h-56 bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />
            <div className="w-full px-8 absolute top-8">
                <div className="flex justify-between">
                    <div className="">
                        <p className="font-light">
                            Corporate Benefits Card
                        </p>
                    </div>
                    <img className="w-20 h-14" src={standardCharterLogo} />
                </div>
                <div className="pt-1">
                    <p className="font-light">
                        Balance
                    </p>
                    <p className="font-medium">
                        RM 654.09
                    </p>
                    <br></br>
                    <div className="flex justify-between">
                        <p className="font-medium tracking-more-wider">
                            ****  ****  ****  7632
                        </p>
                        <p className="font-medium">
                            VISA
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
 );
}