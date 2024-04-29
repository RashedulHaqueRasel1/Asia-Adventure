import { useLoaderData } from "react-router-dom";
import AllTouristsSpotCard from "./AllTouristsSpotCard";
import { useState } from "react";

const AllTouristsSpot = () => {

    const loaderSpots = useLoaderData();
    const [spots, setSpots] = useState(loaderSpots);

    // console.log(spots)



    return (
        <div className="mx-auto container">

            <h1>Total Spots {spots.length}</h1>

            <div className="grid md:grid-cols-2 gap-4">
                 
                {
                    spots.map(spot => <AllTouristsSpotCard 
                        key={spot._id} 
                        spot={spot}
                        coffees={spots}
                        setCoffees={setSpots}
                        ></AllTouristsSpotCard>)
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;