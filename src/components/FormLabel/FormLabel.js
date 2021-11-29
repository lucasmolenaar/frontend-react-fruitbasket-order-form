import React from 'react';
import { useForm } from 'react-hook-form';

const FormLabel = ({ htmlFor, children, inputType, inputId, inputName }) => {

    const { register } = useForm();

    return (
        <label htmlFor={htmlFor}>
            {children}
            <input
                type={inputType}
                id={inputId}
                {...register("ffirstname")}
            />
        </label>
    );
}

export default FormLabel;