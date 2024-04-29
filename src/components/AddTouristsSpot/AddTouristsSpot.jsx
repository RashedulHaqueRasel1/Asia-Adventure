import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
// import { NavLink } from "react-router-dom";


const AddTouristsSpot = () => {

    const { user } = useContext(AuthContext);

    const { email } = user;


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)

        // const { email, password } = data;

        data.email = email;

        // send data  
        fetch('http://localhost:5000/spots', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert("create success")
                }

            })

    }


    return (
        <div className="  mx-auto container   mt-10" style={{ boxShadow: 'box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}    >


            <div className="    shadow-2xl bg-base-100   p-10 space-y-6 rounded-xl container mx-auto   border-red-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}  >

                <label className="label  ">
                    <span className="label-text text-2xl font-bold text-center">Add Tourists Spots</span>
                </label>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Spots Name</span>
                            </label>
                            <div>
                                <input type="text" name="name" id="name" placeholder="Your Email" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500   dark:bg-gray-400" {...register("name", { required: true })} />
                            </div>
                            {errors.name && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Photo URL</span>
                            </label>
                            <div  >
                                <input type="text" name="photo" id="photo" placeholder="Photo Url" className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 focus:text-white" {...register("photo", { required: true })} />

                            </div>
                            {errors.photo && <span className="text-red-600 font-bold lg:ml-4">This field is required</span>}

                        </div>

                    </div>


                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Location</span>
                            </label>
                            <div>
                                <input type="text" name="location" id="location" placeholder="Your Location" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 focus:text-white" {...register("location", { required: true })} />
                            </div>
                            {errors.location && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


 
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <select className="select border-blue-300   focus:dark:border-blue-500 focus:text-white w-full mt-9  lg:w-[600px] lg:ml-4">
                                <option disabled selected>Select Country</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                        </div>

                    </div>


                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Average Cost</span>
                            </label>
                            <div>
                                <input type="number" name="cost" id="cost" placeholder="Average Cost" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 focus:text-white" {...register("cost", { required: true })} />
                            </div>
                            {errors.cost && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <select className="select border-blue-300   focus:dark:border-blue-500 focus:text-white w-full mt-9  lg:w-[600px] lg:ml-4">
                                <option disabled selected>Select Seasonality</option>
                                <option>Summer</option>
                                <option>Winter</option>
                            </select>

                        </div>


                    </div>
                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Travel Time</span>
                            </label>
                            <div>
                                <input type="text" name="time" id="time" placeholder="Travel Time" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 focus:text-white" {...register("time", { required: true })} />
                            </div>
                            {errors.time && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Total Visitors Per Year</span>
                            </label>
                            <div  >
                                <input type="text" name="visitors" id="visitors" placeholder="Total Visitors Per Year" className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 focus:text-white" {...register("visitors", { required: true })} />

                            </div>
                            {errors.visitors && <span className="text-red-600 font-bold ml-4">This field is required</span>}

                        </div>

                    </div>
                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Your Name</span>
                            </label>
                            <div>
                                <input type="text" name="username" id="username" placeholder="Your Name" className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 focus:text-white" {...register("email", { required: true })} />
                            </div>
                            {errors.username && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Email</span>
                            </label>
                            <div  >
                                <input type="text" name="email" id="email" placeholder="Your Email" className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 focus:text-white" {...register("email", { required: true })} />

                            </div>
                            {errors.email && <span className="text-red-600 font-bold ml-4">This field is required</span>}

                        </div>

                    </div>
 











                    <button className="btn w-full hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3" data-aos="fade-up" data-aos-duration="3000">Added Spot</button>

                </form>






            </div>





        </div>
    );
};

export default AddTouristsSpot;