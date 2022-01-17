import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import {PF} from './components/PF/PF'
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import Footer from './components/Footer'
import {EditSingleGetaway} from './components/EditSingleGetaway'
import {NewGetaway} from './components/NewGetaway';
import { authenticate } from './store/session';
import {loadGetaways} from './store/getaways';
import { SearchGetaways } from './components/SearchGetaways';
import {HomePage}  from './components/HomePage';
import './context/Modal.css';
import './index.css'
import './components/ProfilePage/carousel.css'
import {ViewSingleGetaway} from './components/ViewSingleGetaway'
import BrowseGetawaysPage from './components/BrowseGetawaysPage'
function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

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
      <NavBar />
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
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
