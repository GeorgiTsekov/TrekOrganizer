import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as trekService from '../../services/trekService';
import './TrekDetails.css';

const TrekDetails = ({
    match
}) => {
    let [trek, setTrek] = useState({});
    useEffect(() => {
        trekService.getOne(match.params.trekId)
            .then(res => setTrek(res));
    }, [match]);

    const onTrekButtonClickHandler = () => {
        let incrementedLikes = trek.likes + 1;
        trekService.like(match.params.trekId, incrementedLikes)
            .then(() => {
                setTrek(state => ({ ...state, likes: incrementedLikes }))
            });
    };

    return (
        <div className="trek-details">
            <div className="card overflow-hidden treksPlaceholder trek-details">
                <img className="card-image" src={trek.imageURL} />
                <div className="overflow-hidden my-3 p-3">
                    <h2 className="display-5">{trek.location}</h2>
                    <p className="infoType">Description:</p>
                    <p className="trek-description">{trek.description}</p>
                    <p className="infoType">createdOn: <large>{trek.createdOn}</large></p>
                    <p className="infoType">startDate: <large>{trek.startDate}</large></p>
                    <p className="infoType">endDate: <large>{trek.endDate}</large></p>
                    <p className="infoType">Likes: <large>{trek.likes}</large></p>
                    <p className="infoType">Organizer: <large>{trek.organizer}</large></p>
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