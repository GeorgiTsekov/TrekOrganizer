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
import DeleteTrek from './components/DeleteTrek/DeleteTrek';
import About from './components/About/About';
import axios from 'axios';

import './App.css';

export default class App extends Component {
  state = {};

  componentDidMount = () => {
    axios.get('identity/user').then(
      res => {
        this.setUser(res.data);
      },
      err => {
        console.log(err.response);
      }
    )
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Header user={this.state.user} setUser={this.setUser} />

          <Switch>
            <Route exact path="/" component={() => <Home user={this.state.user} />} />
            <Route exact path="/login" component={() => <Login setUser={this.setUser} />} />
            <Route exact path="/register" component={Register} />
            <Route path="/categories/:category" component={Categories} />
            <Route path="/treks/:trekId" component={TrekDetails} />
            <Route path="/edit/treks/:trekId" component={EditTrek} />
            <Route path="/delete/treks/:trekId" component={DeleteTrek} />
            <Route path="/create/treks" component={CreateTrek} />
            <Route path="/about" component={About} />
          </Switch>

          <Footer />
        </div>

      </BrowserRouter>

    );
  }
}