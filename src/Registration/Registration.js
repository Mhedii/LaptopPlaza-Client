import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../hooks/useFirebase";
import "./Registration.css"

const CustomarRegister = () => {
    const { handleUserRegister, hanldeUserInfoRegister } = useFirebase();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        handleUserRegister(data.email, data.displayName, data.password);
        hanldeUserInfoRegister(data.email, data.displayName);

        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    className="input-field"
                    name="displayName"
                    placeholder="Name"
                    type="text"
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
