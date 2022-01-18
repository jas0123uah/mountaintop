

import React from 'react';
import SideBar from '../SideBar';
import ProfileMainContent from '../ProfileMainContent'
import './PF.css'
export const PF = () => {
return(
    <>
    <div className="containerForSidebarAndMainContent">
<div class="div1"><SideBar></SideBar> </div>
<div class="div2" id="pf"><ProfileMainContent></ProfileMainContent> </div>
    </div>
</>)
}
