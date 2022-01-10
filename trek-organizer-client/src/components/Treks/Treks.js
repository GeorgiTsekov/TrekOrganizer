import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as trekService from '../../services/trekService';
import Categories from '../Categories/Categories';
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

        <Categories />
        <div className="heading-top">
          <h1>Treks</h1>
          <p>
            Welcome to treks by category page
          </p>
        </div>

        <div className="row">
          {treks.length > 0 ? (
            <div className="row">
              {
                treks.map((x) => <Trek key={x.id} trek={x} />)
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