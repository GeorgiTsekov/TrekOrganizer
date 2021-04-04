import { Route, Switch } from 'react-router-dom';
import { Component } from 'react';

import * as trekService from './services/trekService';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';

import style from './App.module.css';

class App extends Component {

  render() {
    return (
      <div className={style.app}>
        <Header />

        <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/categories/:category" component={Categories}></Route>

        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
