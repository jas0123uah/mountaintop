

import React, {useState} from 'react';
import {useLocation} from 'react-router-dom'
import SideBar from '../SideBar';
import ProfileMainContent from '../ProfileMainContent'
import { PreviousUserReservations } from '../PreviousReservations';
import { UpcomingUserReservations } from '../UpcomingUserReservations';
import './PF.css'
export const PF = () => {
    const location = useLocation();
    const [isMobile, setisMobile] = useState(window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)'));
    const [disp, setDisp] = useState("0");
    

    const adjustHamburgerSideBar =() =>{
        const newdisp = disp == '0'? '100' : '0'
        setDisp(newdisp);
    }

  isMobile.addEventListener('change', (e) => {
    setisMobile((window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)')))
  });

  let pfMainContent = null
  let content;

  if (location.pathname.includes("/profile/getaways")) {
      content = <SideBar/>
    
      
  }
  else if(location.pathname.includes("/profile/upcomingreservations")){
      content=<UpcomingUserReservations/>

  }
  else if (location.pathname.includes("/profile/previousreservations")){
      content = <PreviousUserReservations/>
  }
  else{
      content = <SideBar/>
      pfMainContent = <div class="div2" id="pf"><ProfileMainContent /> </div>
  }
return(
    <>
    <div className="containerForSidebarAndMainContent">
    {content}
    {pfMainContent}
{/* <div class="div1"><SideBar></SideBar> </div> */}
{/* <div class="div2" id="pf"><ProfileMainContent></ProfileMainContent> </div> */}
    </div>
</>)
}
