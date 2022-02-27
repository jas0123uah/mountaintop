import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import {PF} from './components/ProfilePageComponents/PF/PF'
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import Footer from './components/Footer'
import {EditSingleGetaway} from './components/GetawayComponents/EditSingleGetaway'
import {NewGetaway} from './components/GetawayComponents/NewGetaway';
import {MobileNavBar} from './components/MobileNavBar'
import { MobileFooter } from './components/MobileFooter';
import { authenticate } from './store/session';
import {loadGetaways} from './store/getaways';
import { SearchGetaways } from './components/SearchComponents/SearchGetaways';
import {HomePage}  from './components/HomePage';
import './context/Modal.css';
import './index.css'
import './components/assets/carousel.css'
import './components/assets/reviewPage.css'
import './components/assets/formPageStyling.css'
import "react-datepicker/dist/react-datepicker.css";
import {ViewSingleGetaway} from './components/ViewSingleGetaway'
import BrowseGetawaysPage from './components/BrowseGetawaysComponents/BrowseGetawaysPage'
function App() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setisMobile] = useState(window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)'));
  const dispatch = useDispatch();
  isMobile.addEventListener('change', (e) => {
    setisMobile((window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)')))
});



  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(loadGetaways());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
    {isMobile.matches ? <MobileNavBar/> : <MobileNavBar/>}
      {/* <NavBar /> */}
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/profile/' exact={true} >
          <PF/>
        </ProtectedRoute>
        <ProtectedRoute path='/profile/getaways/' exact={true} >
          <PF/>
        </ProtectedRoute>
        <ProtectedRoute path='/profile/previousreservations/' exact={true} >
          <PF/>
        </ProtectedRoute>

        <ProtectedRoute path='/profile/upcomingreservations/' exact={true} >
          <PF/>
        </ProtectedRoute>
        
        <Route path='/getaways/new' exact>
          <NewGetaway/>
        </Route>
        <Route path='/getaways/:getawayId' exact>
          <ViewSingleGetaway />
        </Route>
        <Route path='/getaways/:getawayId/edit' exact>
          <EditSingleGetaway/> 
        </Route>

        <ProtectedRoute path='/getaways/:getawayId/reservations/:reservationId/edit' exact={true} >
          <ViewSingleGetaway />
        </ProtectedRoute>
        <Route path='/search/:term'>
          <SearchGetaways/>
        </Route>
        <Route path='/browse'>
          <BrowseGetawaysPage/>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
      {isMobile.matches ? <MobileFooter/> : <Footer/>}
      {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;
