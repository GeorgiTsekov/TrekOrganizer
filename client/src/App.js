import { Component } from 'react';

import * as trekService from './services/trekService';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Home from './components/Home/Home';

import style from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treks: []
    }
  }

  componentDidMount() {
    trekService.getAll()
      .then(treks => {
        this.setState({treks})
      });
  }

  render() {
    return (
      <div className={style.app}>
        <Header />
        <Home />

        <Main treks={this.state.treks} />
      </div>
    );
  }
}

export default App;
