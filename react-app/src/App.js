import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import BrowseGetawaysButton from'./components/BrowseGetawaysButton'
import UsersList from './components/UsersList';
import Footer from './components/Footer'
import User from './components/User';
import ProfilePage from './components/ProfilePage'
import {EditSingleGetaway} from './components/EditSingleGetaway'
import {NewGetaway} from './components/NewGetaway';
import { authenticate } from './store/session';
import {loadGetaways} from './store/getaways';
import {HomePage}  from './components/HomePage';
import './context/Modal.css';
import './index.css'
import './components/ProfilePage/carousel.css'
import {ViewSingleGetaway} from './components/ViewSingleGetaway'
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
          <ProfilePage/>
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

        <Route path='/search-results/:term'>
          {/* <SearchGetaways/> */}
        </Route>
        <Route path='/browse'>
          {/* <BrowseGetaways/> */}
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
          <BrowseGetawaysButton/>
        </ProtectedRoute>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
