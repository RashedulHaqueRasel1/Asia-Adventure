import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Card from "./Card";



const HomeCard = () => {
    const { user } = useContext(AuthContext);
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


            <div className="grid md:grid-cols-3 gap-4">

                {
                    item.map(spot => <Card
                        key={spot._id}
                        item={item}
                    >
                    </Card>)
                }
            </div>

        </div>
    );
};

export default HomeCard;