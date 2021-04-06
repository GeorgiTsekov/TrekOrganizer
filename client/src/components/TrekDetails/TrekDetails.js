import { useEffect, useState } from 'react';
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
    return (
        <div className="trek-details">
            <div className="col-md-12 text-center overflow-hidden">
                <img className="details-img" src={trek.imageURL} />
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
                    <a className="a-button" href="#">Edit the trek</a>
                    <a className="a-button" href="#">Close the trek</a>
                    <a className="a-button" href="#">Like</a>
                </div>
            </div>
        </div>
    );
};

export default TrekDetails;