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

class App extends Component {

  render() {
    return (
      <div className={style.app}>
        <Header />

        <Switch>
          
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>

          <Route path="/categories/:category" component={Categories}></Route>
          <Route path="/treks/details/:trekId" exact component={TrekDetails}></Route>
          <Route path="/treks/details/:trekId/edit" component={EditTrek}></Route>
          <Route path="/treks/create" component={CreateTrek}></Route>
          <Route path="/register" component={Register}></Route>

        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
