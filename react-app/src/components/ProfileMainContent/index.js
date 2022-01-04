import React from 'react';
import { UpcomingUserReservations } from '../UpcomingUserReservations';
import { PreviousUserReservations } from '../PreviousReservations';
export const ProfileMainContent = () => {
  return (
      <div>
    <div className="profileMainContent">
      <h1> Upcoming Reservations</h1>
      <div className="UpcomingReservations maybe">
          <div className="maybe2">
        <UpcomingUserReservations></UpcomingUserReservations>
          </div>
    </div>
    <h1>Previous Reservations</h1>
    <div className="UpcomingReservations maybe" >
    <PreviousUserReservations/>
    </div>
    </div>
      </div>

   
  );
};
export default ProfileMainContent;
