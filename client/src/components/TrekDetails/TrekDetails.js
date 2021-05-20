import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TrekDetails.css';
import axios from 'axios';

const TrekDetails = ({
    history,
    match
}) => {
    let [trek, setTrek] = useState({});
    const id = match.params.trekId;
    useEffect(() => {
        const id = match.params.trekId;
        axios.get(`treks/${id}`)
            .then(res => {
                setTrek(res.data)
            })
            .catch(error => { console.log(error.response) })
    }, [match]);

    const onTrekButtonClickHandler = (e) => {
        e.preventDefault();

        axios.put(`treks/like/${id}`)
            .then(() => {
                setTrek(state => ({ ...state, likes: trek.likes + 1 }))
            })
            .catch(error => { console.log(error.response) })
            .then(() => {
                history.push(`/treks/${id}`);
            });
    };
    return (
        <div className="trek-details">
            <div className="card overflow-hidden treksPlaceholder trek-details">
                <img className="card-image" src={trek.imageUrl} alt="" />
                <div className="overflow-hidden my-3 p-3">
                    <h1 className="display-5">{trek.location}</h1>
                    <h2 className="display-5">{trek.categoryName}</h2>
                    <p className="infoType">Description:</p>
                    <p className="trek-description">{trek.description}</p>
                    {/* <p className="infoType">createdOn: <large>{trek.createdOn}</large></p> */}
                    <p className="infoType">StartDate: <large>{trek.startDate}</large></p>
                    <p className="infoType">EndDate: <large>{trek.endDate}</large></p>
                    <p className="infoType">Likes: <large>{trek.likes}</large></p>
                    <p className="infoType">Organizer: <large>{trek.organizerName}</large></p>
                </div>
                <div className="buttons-together">
                    <Link className="a-button" to={`/edit/treks/${trek.id}`}>Edit the trek</Link>
                    <Link className="a-button" to={`/delete/treks/${trek.id}`}>Close the trek</Link>
                    <button className="a-button" onClick={onTrekButtonClickHandler}><i className="fas fa-heart"></i> Like</button>
                </div>
            </div>
        </div>
    );
};

export default TrekDetails;