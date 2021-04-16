import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as trekService from '../../services/trekService';
import './TrekDetails.css';

function TrekDetails(props) {
    let [trek, setTrek] = useState({});
    useEffect(() => {
        trekService.getOne(props.match.params.trekId, props.authenticationToken)
            .then(res => setTrek(res));
    }, []);

    const onTrekButtonClickHandler = () => {
        let incrementedLikes = trek.likes + 1;
        trekService.like(props.match.params.trekId, incrementedLikes)
            .then(() => {
                setTrek(state => ({ ...state, likes: incrementedLikes }))
            });
    };

    return (
        <div className="trek-details">
            <div className="card overflow-hidden treksPlaceholder trek-details">
                <img className="card-image" src={trek.imageUrl} />
                <div className="overflow-hidden my-3 p-3">
                    <h1 className="display-5">{trek.location}</h1>
                    <h2 className="display-5">{trek.categoryName}</h2>
                    <p className="infoType">Description:</p>
                    <p className="trek-description">{trek.description}</p>
                    <p className="infoType">createdOn: <large>{trek.createdOn}</large></p>
                    <p className="infoType">startDate: <large>{trek.startDate}</large></p>
                    <p className="infoType">endDate: <large>{trek.endDate}</large></p>
                    <p className="infoType">Likes: <large>{trek.likes}</large></p>
                    <p className="infoType">Organizer: <large>{trek.organizerName}</large></p>
                </div>
                <div className="buttons-together">
                    <Link className="a-button" to={`/treks/details/${trek.id}/edit`}>Edit the trek</Link>
                    <Link className="a-button" to={`/treks/details/${trek.id}/close`}>Close the trek</Link>
                    <button className="a-button" onClick={onTrekButtonClickHandler}><i className="fas fa-heart"></i> Like</button>
                </div>
            </div>
        </div>
    );
};

export default TrekDetails;