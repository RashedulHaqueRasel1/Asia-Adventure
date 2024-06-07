import { NavLink, useLoaderData } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const CardDetails = () => {

    const spots = useLoaderData();
    // console.log(spots)


    const { _id, email, name, photo, cost,country,location, visitors, description, time, seasonality } = spots;

    return (
        <div className="mx-auto container">

            <section>
                <div className="  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                            className="w-full lg:h-[600px]"
                                alt=""
                                src={photo}
                            />
                        </div>

                        <div className="lg:py-24">
                            <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                                <dl className="-my-3 divide-y divide-gray-100 text-[16px] font-semibold">

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Spot Name :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{name}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Country :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{country}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Location :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{location}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Average Cost :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{cost} Tk</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Travel Time :</dt>
                                        <dd className="text-gray-700 font-medium   sm:col-span-2">{time} Hour</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Total Visitors Per Year :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{visitors}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Seasonality :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">{seasonality}</dd>
                                    </div>

                                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                                        <dt className=" text-gray-900">Short Description :</dt>
                                        <dd className="text-gray-700 font-medium sm:col-span-2">
                                            {description}
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <NavLink  to={'/'} className="btn  hover:outline text-[16px] bg-purple-500 hover:bg-transparent text-white hover:text-black mr-3 "><IoMdArrowRoundBack></IoMdArrowRoundBack>Back to homepage</NavLink> 
                </div>
            </section>

        </div>
    );
};

export default CardDetails;