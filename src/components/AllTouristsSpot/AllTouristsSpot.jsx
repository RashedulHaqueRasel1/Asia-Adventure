import { useLoaderData } from "react-router-dom";
import AllTouristsSpotCard from "./AllTouristsSpotCard";
// import Sort from "../Sort/Sort";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Sort from "../Sort/Sort";
// import { useState } from "react";

const AllTouristsSpot = () => {

    const loaderSpots = useLoaderData();


    // const { _id, email, name, photo, cost, visitors,description ,time ,seasonality} = spot;
    const [spots, setSpots] = useState(loaderSpots);

    // console.log(spots.photo)

 

    const { user } = useContext(AuthContext);

    const [as, setAs] = useState();
    const [ds, setDs] = useState();

    // console.log('aaaaaaaaaa', as)
    console.log('ddddddddddddddd', ds)

    useEffect(() => {
        fetch(`https://asia-adventura-server.vercel.app/spots/as`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAs(data)

            });
    }, [user])




 

    useEffect(() => {
        fetch(`https://asia-adventura-server.vercel.app/spots/ds`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setDs(data)
            });
    }, [user])




    return (
        <div className="mx-auto container">

            <label className="label  ">
                <span className="label-text text-2xl mt-10 font-bold text-center md:ml-48 lg:ml-[600px]">Total Tourists Spots : {spots.length}</span>
            </label>

            {/* Sort */}
            {/* <div className="mx-auto container items-center   mt-4 mb-4  text-2xl font-bold text-center    ">
                <select className="select select-primary w-full max-w-xs">
                    <option disabled selected>Average Cost</option>
                    <option >Ascending</option>
                    <option onClick={() => handleDs(ds)} >Descending</option>

                </select>
            </div> */}

            {/* Sort Data End */}


            <div className="grid md:grid-cols-3 gap-4">

                {
                    spots.map(spot => <AllTouristsSpotCard
                        key={spot._id}
                        spot={spot}
                        coffees={spots}

                    ></AllTouristsSpotCard>)
                }

                {/* {
                    ds.map(d => <Sort
                    key={d._id}
                    d={d}
                    ></Sort>)
                } */}
            </div>


        </div>
    );
};

export default AllTouristsSpot;