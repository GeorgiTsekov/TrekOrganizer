import { useState } from "react";
import validator from 'validator';

const TrekValidations = () => {
    const [errors, setErrors] = useState(
        {
            location: false,
            description: false,
            imageUrl: false,
        });

    const imageUrlChangeHandler = (e) => {
        let value = e.target.value;
        if (!validator.isURL(value)) {
            setErrors(state => ({ ...state, imageUrl: 'Your image should be valid URL!' }));
        } else {
            setErrors(state => ({ ...state, imageUrl: false }));
        }
    }

    const descriptionChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length > 300) {
            setErrors(state => ({ ...state, description: 'Your description should be maximum 300 characters!' }));
        } else {
            setErrors(state => ({ ...state, description: false }));
        }
    }

    const locationChangeHandler = (e) => {
        let value = e.target.value;
        if (value.length < 2) {
            setErrors(state => ({ ...state, location: 'Your make should be minimum 2 characters!' }));
        } else {
            setErrors(state => ({ ...state, location: false }));
        }
    }

    return {
        imageUrlChangeHandler,
        descriptionChangeHandler,
        locationChangeHandler,
        errors
    }
}

export default TrekValidations;