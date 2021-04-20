import './Home.css'

const Home = (props) => {
  return (
    <div className="home d-md-flex flex-md-equal  my-md-3 pl-md-3">
      <div className="col-md-7">
        <h2 className="featurette-heading">Here you will find the treks you've <span className="text-highlighted">always dreamed
          about!</span></h2>
        <p className="lead">1. Join our family.</p>
        <p className="lead">2. Request the trek you've always wanted.</p>
        <p className="lead">3. Find people who like your idea.</p>
        <p className="lead">If you find enough supporters, we will organize everything for you!</p>
        <p className="lead">{props.userName ? 'Hi ' + props.userName : 'You are not logged in!'}</p>
        <p className="lead">{props.email ? 'Hi ' + props.email : 'You are not logged in!'}</p>
        <p className="lead">{props.id ? 'Hi ' + props.id : 'You are not logged in!'}</p>
      </div>
      <div className="col-md-5">
        <img className="home-picture" src="/mountainLogo.png" />
      </div>
    </div>
  );
}

export default Home;