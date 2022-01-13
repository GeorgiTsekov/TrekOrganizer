import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";

import *as trekService from '../../../services/trekService';
import InputFormComponent from "../../Common/InputFormComponent/InputFormComponent";
import TrekValidations from "../../Common/Validations/TrekValidations";
import { useNotificationContext, types } from "../../../contexts/NotificationContext";
import { trekCategories } from "../trekConstants";

const Create = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();
    const {
        locationChangeHandler,
        descriptionChangeHandler,
        imageUrlChangeHandler,
        errors
    } = TrekValidations();

    const onTrekCreate = (e) => {
        e.preventDefault();
        let trekData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(trekData)
        trekService.create(trekData)
            .then(result => {
                addNotification(result.message, types.success)
                navigate('/treks/all');
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
            })
    }

    return (
        <section className="contact-form">
            <div className="container">
                <div className="contact-heading">
                    <h1>Create Trek</h1>
                    <h3>You can create your trek here.</h3>
                </div>
                <form id="contact" onSubmit={onTrekCreate} method="POST">
                    <h3>Leave your query here</h3>
                    <div className="d-flex">
                        <div className="form-group">
                            <select name="categoryName" id="categoryName" className="form-control">
                                {trekCategories.map(x => <option key={x.value} value={x.value} >{x.value}</option>)}
                            </select>
                        </div>
                    </div>
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="location"
                        placeholder="Location"
                        onBlur={locationChangeHandler}
                        errors={errors.location}
                    />
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="description"
                        placeholder="Say something about this trek"
                        onBlur={descriptionChangeHandler}
                        errors={errors.description}
                    />
                    <InputFormComponent
                        form="form-group"
                        type="text"
                        name="imageUrl"
                        placeholder="https://your-image"
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
                        placeholderText="2022-01-01"
                        isClearable
                    />
                    <ReactDatePicker
                        className="form-group"
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        name="endDate"
                        dateFormat='yyyy-MM-dd'
                        minDate={new Date()}
                        placeholderText="2022-01-01"
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

export default Create;