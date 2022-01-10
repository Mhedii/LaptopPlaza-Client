import React, { useEffect, useState } from "react";
// import "./purchasing";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const Purchase = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});


    const email = sessionStorage.getItem("email");
    useEffect(() => {
        fetch(`http://localhost:5000/singleOrder/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);

    console.log(service);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = email;

        data.status = "pending";

        fetch("http://localhost:5000/confirmBooking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };

    return (
        <div>
            <h1 className="text-danger">purchasing Form</h1>

            <div className=" container">
                <div className="row container">
                    <div className="col-md-6">
                        <div className="details-img">
                            <img className="w-75" src={service?.image} alt="" />
                        </div>

                        <h4> Brand: {service?.brand} </h4>
                        <h4> model: {service?.model} </h4>
                        <h4 className="text-danger"> price: {service?.price}</h4>
                        <p className="fs-6">{service?.description}</p>
                    </div>
                    <div className="col-md-6 mt-5">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                {...register("brand")}
                                // placeholder="Brand"
                                defaultValue={service?.brand}
                                className="p-2 m-2 w-100"
                            />
                            <input
                                {...register("model")}
                                // placeholder="Model"
                                defaultValue={service?.model}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}

                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("comments")}
                                placeholder="comments"
                                // className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("price", { required: true })}
                                defaultValue={service?.price}
                                // className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                defaultValue={service?.image}
                                // className="p-2 m-2"
                                className="p-2 m-2 w-100"
                            />
                            <br />


                            {errors.exampleRequired && <span>This field is required</span>}



                            <Link to={"/dashboard/payment"}>
                                {" "}
                                <button className="btn btn-success">Buy Now</button>
                            </Link>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
