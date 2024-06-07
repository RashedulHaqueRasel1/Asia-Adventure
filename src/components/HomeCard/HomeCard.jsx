import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Card from "./Card";
import CountryHome from "../Country/CountryHome/CountryHome";
// import CountryHome from "../Country/CountryHome/CountryHome";



const HomeCard = () => {
    const { user } = useContext(AuthContext);

    // console.log(user)

    const [item, setItem] = useState([]);


    useEffect(() => {
        fetch(`https://asia-adventura-server.vercel.app/spots`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setItem(data)

            });
    }, [user])


    // console.log(item)

    return (
        <div className="mx-auto container">




            <div className="text-center rounded-lg">
                <h2 className="text-2xl lg:text-4xl text-primary-text-color font-extrabold ">Tourist Spots</h2>
                <p className="font-medium opacity-60 mt-6 text-sm px-8 lg:p-0 lg:text-lg mx-auto  w-full lg:w-2/4">
                Southeast Asia Tourism Management involves the strategic planning, development, and implementation of policies, initiatives, and practices aimed at promoting sustainable tourism growth while preserving.</p>
            </div>


            <div className="grid md:grid-cols-3 gap-4">



                {
                    item.slice(0, 6).map(i => <Card key={i._id} i={i}></Card>)
                }
            </div>



        </div>
    );
};

export default HomeCard;