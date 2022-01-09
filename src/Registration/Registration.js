import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../hooks/useFirebase";
import "./Registration.css"

const CustomarRegister = () => {
    const { googleSignIn, handleUserRegister } = useFirebase();
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data) => {
        handleUserRegister(data.email, data.displayName, data.password);
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="displayName"
                    placeholder="Name"

                    {...register("displayName", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="phone"
                    type="text"
                    {...register("phone", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="password"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Register"

                />
            </form>
        </div>
    );
};

export default CustomarRegister;
