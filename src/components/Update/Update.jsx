import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";




const Update = () => {

    const { user } = useContext(AuthContext);
    const spots = useLoaderData();
    const navigate = useNavigate();

    console.log(spots)

    const { _id } = spots;


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (spots) => {
        // console.log(spots)
 

        // update data  

        fetch(`https://asia-adventura-server.vercel.app/spots/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(spots)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
 
                    Swal.fire({
                        title: "Congratulations!",
                        text: "Tourist Spot Added Successfully",
                        icon: "success"
                    });
                    navigate('/')
                }

            })

    }




 

    return (
        <div className="mx-auto container" >


            <div className="    shadow-2xl bg-base-100   p-10 space-y-6 rounded-xl container mx-auto   border-red-500" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}  >

            <label className="label  ">
                    <span className="label-text text-2xl font-bold text-center md:ml-48 lg:ml-[600px]">Update Tourists Spots</span>
                </label>

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Spots Name</span>
                            </label>
                            <div>
                                <input type="text" name="name" id="name" defaultValue={user.name} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400"  {...register("name", { required: true })} />
                            </div>
                            {errors.name && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Photo URL</span>
                            </label>
                            <div  >
                                <input type="text" name="photo" id="photo" defaultValue={spots.photo} className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("photo", { required: true })} />

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
                                <input type="text" name="location" id="location" defaultValue={spots.location} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("location", { required: true })} />
                            </div>
                            {errors.location && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>



                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold lg:ml-4">Select Country</span>
                            </label>
                            <select className="select select-primary w-full lg:ml-4  lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" defaultValue={spots.country} {...register("country", { required: true })}>
                                <option disabled selected>Select Country</option>
                                <option>Bangladesh</option>
                                <option>Thailand</option>
                                <option>Malaysia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                            {errors.country && <span className="text-red-600 font-bold">This field is required</span>}
                        </div>

                    </div>


                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Average Cost</span>
                            </label>
                            <div>
                                <input type="number" name="cost" id="cost" defaultValue={spots.cost} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("cost", { required: true })} />
                            </div>
                            {errors.cost && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold lg:ml-4">Seasonality</span>
                            </label>
                            <div>
                                <select className="select select-primary w-full lg:ml-4  lg:w-[600px] *: border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" defaultValue={spots.seasonality} {...register("seasonality", { required: true })}>
                                    <option disabled selected>Select Seasonality</option>
                                    <option>Winter</option>
                                    <option>Summer</option>

                                </select>
                            </div>
                            {errors.seasonality && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                    </div>
                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Travel Time</span>
                            </label>
                            <div>
                                <input type="text" name="time" id="time" defaultValue={spots.time} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("time", { required: true })} />
                            </div>
                            {errors.time && <span className="text-red-600 font-bold">This field is required</span>}

                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Total Visitors Per Year</span>
                            </label>
                            <div  >
                                <input type="text" name="visitors" id="visitors" defaultValue={spots.visitors} className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" {...register("visitors", { required: true })} />

                            </div>
                            {errors.visitors && <span className="text-red-600 font-bold lg:ml-4">This field is required</span>}

                        </div>

                    </div>


                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Short Description</span>
                            </label>
                            <textarea className="textarea textarea-primary  lg:w-[1220px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" defaultValue={spots.description} name="description" id="description" {...register("description", { required: true })}></textarea>
                            {errors.description && <span className="text-red-600 font-bold lg:ml-4">This field is required</span>}

                        </div>

                    </div>


                    <div className="lg:flex justify-center">
                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text font-bold">Your Name</span>
                            </label>
                            <div className="border border-blue-300   focus:dark:border-blue-500">
                                <input type="text" name="username" id="username" defaultValue={user.displayName} className="input input-bordered lg:w-[600px] w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" disabled />
                            </div>


                        </div>


                        <div className="space-y-1 text-sm" data-aos="fade-up" data-aos-duration="2200">
                            <label className="label">
                                <span className="label-text lg:ml-4 font-bold">Email</span>
                            </label>
                            <div className="border border-blue-300   focus:dark:border-blue-500 lg:ml-4">
                                <input type="text" name="email" id="email" defaultValue={user.email} className="input input-bordered  lg:w-[600px] lg:ml-4 w-full    border-blue-300   focus:dark:border-blue-500 dark:bg-gray-400" disabled />

                            </div>


                        </div>

                    </div>
 
                    <button className="btn w-full hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3"  >Update Spot</button>

                </form>
            </div>
        </div>
    );
};

export default Update;