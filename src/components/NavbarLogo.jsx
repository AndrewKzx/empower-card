import React, { useState } from 'react';

import stcbank from "../img/stcBank.jpg"
import profilePic from "../img/randomPic.jpeg"

export default function Navbar() {

 return (
   <nav className="flex items-center justify-between flex-wrap p-2">
     <div className="flex items-center flex-shrink-0">
       <img src={stcbank} className="w-130 h-20" alt="Logo" />
     </div>
    <img class="h-13 w-12 rounded-full" src={profilePic} />  
   </nav>
 );
}