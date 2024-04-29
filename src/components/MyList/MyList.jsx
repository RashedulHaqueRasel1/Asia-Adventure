import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyListCard from "../MyListCard/MyListCard";
// import MyListCard from "../MyListCard/MyListCard";
// import MyListCard from "../MyListCard/MyListCard";


const MyList = () => {
    const { user } = useContext(AuthContext);

   const [item, setItem] = useState([]);
 
    // console.log(user)



 

    useEffect(()=> {
        fetch(`https://asia-adventura-server.vercel.app/myList/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setItem(data)
             
        });
    },[user])

    return (
        <div>


            <h1>My List : {item.length}</h1>
             


            {
                item.map(u => <MyListCard key={u._id} u={u}></MyListCard>)
            }




            
            
        </div>
    );
};

export default MyList;