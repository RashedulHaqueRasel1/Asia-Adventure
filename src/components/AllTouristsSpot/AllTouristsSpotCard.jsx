 




const AllTouristsSpotCard = ({ spot }) => {


    const { _id, email, name, photo, cost, visitors,description ,time ,seasonality} = spot;


 

    return (
        <div>


            <div className="mx-auto container ">
                <div className=" h-full   " data-aos="fade-up" data-aos-duration="3000"  >

                    <div className="flex flex-col  max-w-lg p-6 space-y-6 overflow-hidden  rounded-lg shadow-md    " style={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }} >

                        <div className=" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" >
                            <div>
                                <img src={photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500 rounded-lg relative" data-aos="fade-up" data-aos-duration="3000" />
                                <div className="">
                                    <span className="absolute lg:-mt-96 lg:ml-80 text-white p-2 bg-red-600 rounded-full">{seasonality}</span>
                                </div>
                                <h2 className="mb-1 text-2xl font-semibold" data-aos="fade-up" data-aos-duration="2900">name{name}</h2>
                                <h2 className="mb-1 text-2xl font-semibold" data-aos="fade-up" data-aos-duration="2900">cos{cost}</h2>
                                <p className="text-xl dark:text-gray-600  " data-aos="fade-up" data-aos-duration="2900">des{description}</p>
                                <p className="text-xl dark:text-gray-600  " data-aos="fade-up" data-aos-duration="2900">Visit{visitors}</p>
                                <p className="text-xl dark:text-gray-600  " data-aos="fade-up" data-aos-duration="2900">Visit{time}</p>
                            </div>

 








                            <div>
                                <div className="join join-vertical">
                                    <button className="btn join-item">View</button>
 
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>






        </div>
    );
};

export default AllTouristsSpotCard;