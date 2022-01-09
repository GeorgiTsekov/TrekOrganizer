import React from "react";
import { Alert } from "react-bootstrap";

const InputFormComponent = ({ type, name, placeholder, defaultValue, onBlur, errors }) => {
    return (
        <>
            <fieldset>
                <input type={type} name={name} defaultValue={defaultValue} placeholder={placeholder} onBlur={onBlur} />
                {errors ? <Alert variant="danger" style = {{opacity: 1}}  show={errors}  >{errors}</Alert> : null}
            </fieldset>
        </>
    )
}

export default InputFormComponent;