import React, { useState } from 'react';

import navBar from "../img/navbarIcon.jpg"
import bell from "../img/bellIcon.png"

export default function Navbar2() {

 return (
   <nav className="flex items-center justify-between flex-wrap p-2">
     <div className="flex items-center flex-shrink-0">
       <img src={navBar} className="object-scale-down w-15 h-10" alt="Logo" />
     </div>
    <img class="object-scale-down w-8 h-9" src={bell} />  
   </nav>
 );
}