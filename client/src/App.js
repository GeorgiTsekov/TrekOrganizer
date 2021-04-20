import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Component } from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import TrekDetails from './components/TrekDetails/TrekDetails';
import CreateTrek from './components/CreateTrek/CreateTrek';
import EditTrek from './components/EditTrek/EditTrek';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Register from './components/Register/Register';
import { useEffect, useState } from 'react';

import style from './App.module.css';
import useToken from './components/UseToken/useToken';

function App() {

  // const { token, setToken } = useToken();

  // if (token) {
  //   return <Login setToken={setToken} />
  // }

  // const authInfo = {
  //   authenticationToken: `Bearer ${token}`
  // }

  let user = {};
  let token = '';

  if (localStorage.length > 0) {
    token = localStorage.token
  }

  useEffect(() => {
    (
      async () => {
        const response = await fetch('https://localhost:44385/Identity', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });

        user = await response.json();
      }
    )();
  });


  return (
    <div className={style.app}>
      <BrowserRouter>

        <Header {...user} />

        <Route path="/" exact render={props => <Home {...props}{...user} />} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/treks/details/:trekId" component={TrekDetails} />
        <Route path="/treks/details/:trekId/edit" component={EditTrek} />
        <Route path="/treks/create" component={CreateTrek} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logou" component={Logout} />
        {/* <Route path="/treks/details/:trekId" exact render={props => <TrekDetails {...props}{...authInfo} />} />
        <Route path="/treks/details/:trekId/edit" render={props => <EditTrek {...props}{...authInfo} />} />
        <Route path="/treks/create" render={props => <CreateTrek {...props}{...authInfo} />} />
        <Route path="/register" render={props => <Register {...props}{...authInfo} />} />
        <Route path="/login" render={props => <Login {...props}{...authInfo} />} />
        <Route path="/logout" render={props => <Logout {...props}{...authInfo} />} /> */}

      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
