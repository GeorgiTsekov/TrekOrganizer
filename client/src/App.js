import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import TrekDetails from './components/TrekDetails/TrekDetails';
import CreateTrek from './components/CreateTrek/CreateTrek';
import EditTrek from './components/EditTrek/EditTrek';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import style from './App.module.css';
import useToken from './components/UseToken/useToken';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  const authInfo = {
    authenticationToken: `Bearer ${token}`
  }


  return (
    <div className={style.app}>
      <Header />

      <Switch>

        <Route path="/" exact component={Home}></Route>
        <Route path="/categories/:category" render={props => <Categories {...props}{...authInfo} />} />
        <Route path="/treks/details/:trekId" exact render={props => <TrekDetails {...props}{...authInfo} />} />
        <Route path="/treks/details/:trekId/edit" render={props => <EditTrek {...props}{...authInfo} />} />
        <Route path="/treks/create" render={props => <CreateTrek {...props}{...authInfo} />} />
        <Route path="/register" render={props => <Register {...props}{...authInfo} />} />
        <Route path="/login" render={props => <Login {...props}{...authInfo} />} />

      </Switch>

      <Footer />
    </div>
  );
}

export default App;
