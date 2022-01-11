import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from "../../../contexts/AuthContext";
import * as trekService from "../../../services/trekService";
import ConfirmDialog from '../../Common/ConfirmDialog/ConfirmDialog';
import useTrekState from "../../../hooks/useTrekState";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import Categories from "../../Categories/Categories";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext()
    const { trekId } = useParams();
    const [trek, setTrek] = useTrekState(trekId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const { addNotification } = useNotificationContext();

    const deleteHandler = (e) => {
        e.preventDefault();

        trekService.deleteTrek(trekId)
            .then(result => {
                addNotification("You delete this trek successfully", types.success)
                navigate('/treks/all');
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    }

    const deleteClickHandler = (e) => {
        e.preventDefault();

        setShowDeleteDialog(true);
    }

    const likeHandler = (e) => {
        e.preventDefault();

        trekService.likes(trekId)
            .then(() => {
                addNotification("You like this trek successfully", types.success)
                setTrek(state => ({ ...state, likes: trek.likes + 1 }))
            })
            .catch(err => {
                addNotification("You already liked this trek", types.error)
                console.log(err);
            })
    }

    const creatorButtons = (
        <div>
            <Link to={`/treks/${trek.id}/edit`} className="btn btn-secondary py-2 ml-1">Edit this trek</Link>
            <button className="btn btn-primary py-2 ml-1" onClick={deleteClickHandler}>Delete this trek</button>
        </div>
    );

    const guestButtons = (
        <div>
            <button className="btn btn-primary py-2 ml-1" onClick={likeHandler}>Like this trek</button>
        </div>
    );
    return (
        <section className="blog_wrapper header" id="header">

            <div className="container">
                <Categories />
                <div className="heading-top">
                    <h1>Trek Details</h1>
                    <p>
                        Welcome to single trek page
                    </p>
                </div>
                <ConfirmDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler} />

                <div className="row">
                    <div className="col-md-9 col-sm-8">
                        <div className="post_block">
                            <div className="col-md-12">
                                <img src={trek.imageUrl} alt="" />
                                <div className="single-blog-content">
                                    <h2>{trek.location}</h2>

                                    <p>{trek.description}</p>
                                    <div className="catageory">
                                        <ul>
                                            <li><Link to="#">StartDate: {trek.startDate}</Link></li>
                                            <li><Link to="#">EndDate: {trek.endDate}</Link></li>
                                            <li><Link to="#">Organizer: {trek.organizerName}</Link></li>
                                            <li><Link to="#">Likes: {trek.likes}</Link></li>
                                            {/* <li><Link to="">3 Comments</Link></li> */}
                                            {user.id && (user.userName === trek.organizerName ? creatorButtons : guestButtons)}
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </section>
    )
}

export default Details;