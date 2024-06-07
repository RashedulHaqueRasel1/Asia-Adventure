import { Link } from "react-router-dom";



const CardCountry = ({ countre }) => {

    // console.log(countre)



    const { _id, email, name, country, photo, cost, visitors, description, time, seasonality } = countre;





    return (
        <div>

            <div >

                <div>
                    <div className="mx-auto container ">
                        <div className=" h-full mt-10  " data-aos="fade-up" data-aos-duration="3000"  >

                            <div className=" flex flex-col rounded-3xl  justify-center items-center   p-2      " style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} >

                                <div className=" ">



                                    <div className="card" >
                                        <figure className="px-10 pt-10">
                                            <img src={photo} alt="Spot" className="rounded-xl w-full md:w-48 lg:w-96 h-72 " />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{name}</h2>
                                            <p className="text-gray-700 font-medium">
                                                {description.slice(0, 100)}

                                            </p>
                                            <div className="flex lg:justify-end md:justify-center justify-end w-80 lg:w-96 md:w-48  mt-4 ">
                                                <p> <span className="font-semibold">Average Cost :</span> <span className="text-gray-700 font-medium">{cost} Tk</span></p>
                                                <p className="font-semibold"> <span>Total Visitors Per Year :</span> <span className="text-gray-700 font-medium">{visitors}</span></p>
                                            </div>

                                            <div className="flex lg:justify-end md:justify-center justify-end w-80 lg:w-96 md:w-48 mt-4  ">
                                                <p> <span className="font-semibold">Travel Time :</span> <span className="text-gray-700 font-medium">{time} hour</span></p>
                                                <p className="font-semibold"> <span>Seasonality :</span> <span className="text-gray-700 font-medium">{seasonality}</span></p>
                                            </div>


                                            <p className="font-semibold"> <span>Country :</span> <span className="text-gray-700 font-medium mt-10">{country}</span></p>



                                            <div className="card-actions mt-4">
                                                <Link to={`/cardDetails/${_id}`}>
                                                    <button className="btn w-full hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>



                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default CardCountry;