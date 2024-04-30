import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyListCard from "../MyListCard/MyListCard";
// import MyListCard from "../MyListCard/MyListCard";
// import MyListCard from "../MyListCard/MyListCard";


const MyList = () => {
    const { user } = useContext(AuthContext);

    // const [spots, setSpots] = useState(loaderSpots);


    const [item, setItem] = useState([]);

    // console.log(user)





    useEffect(() => {
        fetch(`https://asia-adventura-server.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItem(data)

            });
    }, [user])

    return (
        <div className="mx-auto container">


            <h1 className="text-3xl mt-4 font-semibold">My List Added Quantity : {item.length}</h1>



            <div>
 


                {
                    item.map(u => <MyListCard key={u._id} u={u}></MyListCard>)
                }
            </div>






        </div>
    );
};

export default MyList;