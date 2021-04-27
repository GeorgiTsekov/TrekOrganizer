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
import Register from './components/Register/Register';
import axios from 'axios';

import style from './App.module.css';

export default class App extends Component {
  state = {};

  componentDidMount() {
    axios.get('identity/user').then(
      res => {
        this.setUser(res.data);
      },
      err => {
        console.log(err);
      }
    )
  };

  setUser = (user) => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className={style.app}>
        <BrowserRouter>

          <Header user={this.state.user} setUser={this.setUser} />

          <Switch>
            <Route exact path="/" component={() => <Home user={this.state.user} />} />
            <Route exact path="/login" component={() => <Login setUser={this.setUser}/>} />
            <Route exact path="/register" component={Register} />
            <Route path="/categories/:category" component={Categories} />
            <Route path="/treks/:trekId" component={TrekDetails} />
            <Route path="/edit/treks/:trekId" component={EditTrek} />
            <Route path="/create/treks" component={CreateTrek} />
          </Switch>

          <Footer />

        </BrowserRouter>

      </div>
    );
  }
}