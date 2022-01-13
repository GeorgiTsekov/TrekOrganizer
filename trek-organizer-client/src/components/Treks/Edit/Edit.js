import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import useTrekState from "../../../hooks/useTrekState";
import *as trekService from '../../../services/trekService';
import InputFormComponent from "../../Common/InputFormComponent/InputFormComponent";
import TrekValidations from "../../Common/Validations/TrekValidations";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import { trekCategories } from "../trekConstants";

const Edit = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();
    const { trekId } = useParams();
    const [trek, setTrek] = useTrekState(trekId);

    const {
        locationChangeHandler,
        descriptionChangeHandler,
        imageUrlChangeHandler,
        errors
    } = TrekValidations();

    const onCarEdit = (e) => {
        e.preventDefault();
        let trekData = Object.fromEntries(new FormData(e.currentTarget));

        trekService.edit(trekData, trekId)
            .then((result) => {
                addNotification(result.message, types.success)
                navigate(`/treks/${trekId}`);
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
            });
    }

    const categoryNameChangeHandler = (e) => {
        setTrek(state => ({ ...state, categoryName: e.target.value }));
    }

    return (
        <section className="contact-form">
            <div className="container">
                <div className="contact-heading">
                    <h1>Edit Trek</h1>
                    <h3>You can edit your trek.</h3>
                </div>
                <form id="contact" onSubmit={onCarEdit} method="PUT">
                    <h3>Leave your query here</h3>
                    <div className="d-flex">
                        <div className="form-group">
                            <select name="categoryName" id="categoryName" className="form-control" value={trek.categoryName} onChange={categoryNameChangeHandler}>
                                {trekCategories.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                            </select>
                        </div>
                    </div>
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="location"
                        defaultValue={trek.location}
                        onBlur={locationChangeHandler}
                        errors={errors.location}
                    />
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="description"
                        defaultValue={trek.description}
                        onBlur={descriptionChangeHandler}
                        errors={errors.description}
                    />
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="imageUrl"
                        defaultValue={trek.imageUrl}
                        onBlur={imageUrlChangeHandler}
                        errors={errors.imageUrl}
                    />
                    <ReactDatePicker
                        className="form-group"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        name="startDate"
                        dateFormat='yyyy-MM-dd'
                        minDate={new Date()}
                        value={trek.startDate}
                        isClearable
                    />
                    <ReactDatePicker
                        className="form-group"
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        name="endDate"
                        dateFormat='yyyy-MM-dd'
                        minDate={new Date()}
                        value={trek.endDate}
                        isClearable
                    />
                    <fieldset>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>

            </div>

        </section>
    )
}

export default Edit;