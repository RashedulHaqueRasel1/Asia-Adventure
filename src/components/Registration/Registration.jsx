import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";



const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [errorPassword, setErrorPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        const { email, password } = data;




        if (password.length < 6) {
            setErrorPassword("Password should be at least 6 characters or longer ")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setErrorPassword("Your Password Should be Lower Case");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorPassword("Your Password Should be Upper Case");
            return;
        }





        //  create user in fireBase
        createUser(email, password)
            .then((userCredential) => {

                Swal.fire({
                    title: "Registration Success",
                    text: "You have Registration Success",
                    icon: "success"
                });
                // Page Change
                navigate('/')
                console.log(userCredential.user)
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.error(error)
            }
            )


    }










    return (
        <div className="container mx-auto"  >

            <div className="hero min-h-screen " >
                <div className="hero-content flex-col lg:flex-row-reverse" >
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                        <p className="py-6">Register now for Southeast Asia Tourism Management, where strategic planning meets sustainable development.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100" style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body" >


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered border-blue-300"   {...register("name", { required: true })} />

                            </div>
                            {errors.name && <span className="text-red-600 font-bold">This field is required.</span>}


                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered border-blue-300"  {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="label flex items-center mt-2 gap-2 input input-bordered border border-blue-300     ">


                                    <input

                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        name="password"
                                        // className=""
                                      
                                        data-aos="fade-up" data-aos-duration="2900"
                                        {...register("password", { required: true })}
                                    />


                                    <span onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ">
                                        {
                                            showPassword ? <FaRegEye className="ml-20" /> : <FaRegEyeSlash className="ml-20" />
                                        }
                                    </span>
                                </label>
                                {errors.password && <span className="text-red-600 font-bold">This field is required.</span>}
                                {
                                    errorPassword && <p>{errorPassword}</p>
                                }


                                <label className="label mt-6">
                                    <h1>Already Have Account? <Link to={'/login'} className="link link-hover  font-semibold text-rose-700">Login</Link> </h1>
                                </label>
                            </div>


                            <div className="form-control mt-2">
                            <button className="btn w-full hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3" data-aos="fade-up" data-aos-duration="3000">Registration</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Registration;