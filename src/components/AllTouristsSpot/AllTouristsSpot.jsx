import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllTouristsSpot = () => {

    const loaderSpots = useLoaderData();
    const [spots, setSpots] = useState(loaderSpots);

    // console.log(spots)

    const handleOne = () => {
        const a = [...spots].sort(function (a, b) {
            if (a.cost < b.cost) {
                return -1
            }
            return 0
        });
        setSpots(a)
    }




    const handleTwo = () => {
        const b = [...spots].sort(function (a, b) {
            if (a.cost > b.cost) {
                console.log(a.cost)
                return -1
            }
            return 0
        });
        setSpots(b)
    }


    return (
        <div className="mx-auto container">

            <label className="label  ">
                <span className="label-text text-2xl mt-10 font-bold text-center md:ml-48 lg:ml-[600px]">Total Tourists Spots : {spots.length}</span>
            </label>


            {/* Sort */}

            <div className="lg:ml-[700px]">
                <div className="dropdown  mb-10">
                    <div tabIndex={0} role="button" className="btn m-1  w-full hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black ">Sort</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-purple-400 rounded-box w-52">
                        <li onClick={handleOne} className="bg-purple-300 rounded-xl"><a>Ascending</a></li>
                        <li onClick={handleTwo} className="bg-purple-300 rounded-xl mt-2"><a>Descending</a></li>
                    </ul>
                </div>
            </div>

            {/* Sort Data End */}


            <div className="grid md:grid-cols-3 gap-4">

                {
                    spots.map(spot =>


                        <div className="mx-auto container " key={spot._id}>

                            <div className=" h-full   " data-aos="fade-up" data-aos-duration="3000"  >

                                <div className=" flex  rounded-3xl  justify-center items-center p-2" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} >

                                    <div className=" ">
                                        <div className="card " >
                                            <figure className="px-10 pt-10">
                                                <img src={spot.photo} alt="Spot" className="rounded-xl w-full md:w-48 lg:w-96 h-72 " />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{name}</h2>
                                                <p className="text-gray-700 font-medium">
                                                    {spot.description.slice(0, 100)}

                                                </p>

                                                <div className="flex lg:justify-end md:justify-center justify-end w-80 lg:w-96 md:w-48  mt-4 ">
                                                    <p> <span className="font-semibold">Average Cost :</span> <span className="text-gray-700 font-medium">{spot.cost} Tk</span></p>
                                                    <p className="font-semibold"> <span>Total Visitors Per Year :</span> <span className="text-gray-700 font-medium">{spot.visitors}</span></p>
                                                </div>

                                                <div className="flex lg:justify-end md:justify-center justify-end w-80 lg:w-96 md:w-48 mt-4  ">
                                                    <p> <span className="font-semibold">Travel Time :</span> <span className="text-gray-700 font-medium">{spot.time} hour</span></p>
                                                    <p className="font-semibold"> <span>Seasonality :</span> <span className="text-gray-700 font-medium">{spot.seasonality}</span></p>
                                                </div>

                                                <div className="card-actions mt-4">
                                                    <Link to={`/cardDetails/${spot._id}`}>
                                                        <button className="btn w-full hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3">Details</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;