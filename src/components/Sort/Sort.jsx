
// import { AuthContext } from "../Provider/AuthProvider";
// import { useContext, useEffect, useState } from "react";



// const Sort = () => {

    // const { user } = useContext(AuthContext);

    // const [as, setAs] = useState();
    // const [ds, setDs] = useState();

    // // console.log('aaaaaaaaaa', as)
    // // console.log('ddddddddddddddd', ds)

    // useEffect(() => {
    //     fetch(`https://asia-adventura-server.vercel.app/spots/as`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setAs(data)

    //         });
    // }, [user])




    // const handleDs = (ds) => {

    //     console.log(ds)

    // }

    // useEffect(() => {
    //     fetch(`https://asia-adventura-server.vercel.app/spots/ds`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setDs(data)
    //         });
    // }, [user])



//     return (
        // <div className="mx-auto container items-center   mt-4 mb-4  text-2xl font-bold text-center    ">
        //     <select className="select select-primary w-full max-w-xs">
        //         <option disabled selected>Average Cost</option>
        //         <option >AS</option>
        //         <option onClick={() =>handleDs(ds)} >DS</option>

        //     </select>
        // </div>
//     );
// };

// export default Sort;