import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as trekService from '../../services/trekService';
import Trek from './Trek/Trek';

const Treks = () => {
  const { state } = useLocation();
  const [treks, setTreks] = useState(state ? state.treks : []);
  useEffect(() => {
    if (!state) {
      trekService.getAll()
        .then(result => {
          setTreks(result);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [state]);
  return (
    <section className="blog_wrapper header" id="header">
      <div className="container">

        <div className="heading-top">
          <h1>Treks</h1>
          <p>
            Categories
          </p>
          <nav className="navbar navbar-default">
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-left">
                <li><Link to="/treks/all">All Treks</Link></li>
                <li><Link to="">Hiking</Link></li>
                <li><Link to="">Walking</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-left">
                <li><Link to="">Biking</Link></li>
                <li><Link to="">Lift</Link></li>
                <li><Link to="">Skiing</Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-left">
                <li><Link to="">Running</Link></li>
                <li><Link to="">Rafting</Link></li>
                <li><Link to="">Other</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          {treks.length > 0 ? (
            <div className="row">
              {
                treks.map((x) => <Trek key={x._id} trek={x} />)
              }
            </div>
          ) : <p>{state ? "no available treks for this dates" : "no treks"}</p>}
        </div>
      </div>
      <div className="clearfix"></div>
    </section>
  )
}

export default Treks;